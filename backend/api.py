import os
import sqlite3

import flask
import flask_sqlalchemy
import flask_praetorian
import flask_cors
import sqlalchemy
from collections import defaultdict

import sys
import csv
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.tri as tri
from flask import request, jsonify ,send_file

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()


# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id


# initialize app
app = flask.Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'GFRAC'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 0.5}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 1}

# flask praetorian instance
guard.init_app(app, User)

# initialize local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'database.db')}"
db.init_app(app)

# intialize cors

cors.init_app(app)

# add admin user
with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='admin').count() < 1:
        db.session.add(User(
            username='admin',
            password=guard.hash_password('abcd1234'),
            roles='admin',
        ))
    db.session.commit()


# Custom Exception
class NoEntryFoundException(Exception):
    pass


# API's

@app.route('/api/login', methods=['POST'])
def login():
    print(flask.request)
    """
    Logs a user in by parsing a POST request containing user credentials and
    issues a JWT token.
    .. example::
       $ curl http://localhost:5000/api/login -X POST \
         -d '{"username":"admin","password":"abcd1234"}'
    """
    request = flask.request.get_json(force=True)
    username = request.get('username', None)
    password = request.get('password', None)
    user = guard.authenticate(username, password)
    u = User.query.filter_by(username=username).first()
    ret = {'access_token': guard.encode_jwt_token(user), 'role': u.roles}

    # returning access token , status
    return ret, 200


@app.route('/api/refresh', methods=['POST'])
def refresh():
    """
    Refreshes an existing JWT by creating a new one with new expiration time
    .. example::
       $ curl http://localhost:5000/refresh -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    print("refresh request")
    old_token = flask.request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200


@app.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    .. example::
       $ curl http://localhost:5000/api/protected -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    return {"message": f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}

#


@app.route('/api/addnewuser', methods=['POST'])
@flask_praetorian.auth_required
@flask_praetorian.roles_required("admin")
def new_user():
    """
    adds a new user to the database
    .. example::
       $ curl http://localhost:5000/api/addnewuser -X POST \
        -d '{"username":"a","password":"a"}' -H "Authorization: Bearer <your_token>"
    """
    print("a new user request")
    request = flask.request.get_json(force=True)
    username = request.get('username', None)
    password = request.get('password', None)
    roles = 'guest'
    guest = User(username=username,
                 password=guard.hash_password(password), roles=roles)
    db.session.add(guest)
    try:
        db.session.commit()
    except sqlalchemy.exc.SQLAlchemyError as err:
        return {"message": "Not created, User already exists with same username"}, 500
    return {"message": "user created"}, 200


@app.route('/api/deleteuser', methods=['DELETE'])
@flask_praetorian.auth_required
def delete_user():
    """
    Delete the user details with the given user name
    .. example::
       $ curl http://localhost:5000/api/deleteuser -X POST \
        -d '{"username":"a"}' -H "Authorization: Bearer <your_token>"
    """
    print("a new user request")
    request = flask.request.get_json(force=True)
    username = request.get('username', None)
    #password = request.get('password', None)
    #roles = 'guest';
    user = User.query.filter_by(username=username).first()
    #guest = User(username = username,password=guard.hash_password(password),roles=roles);
    if user:
        db.session.delete(user)
        db.session.commit()
        return {"message": "User account deleted"}, 200
    else:
        return {"message": "User doesn't exist"}, 500


@app.route('/api/users', methods=['GET'])
@flask_praetorian.roles_required("admin")
def get_all_users():
    """
        A protected endpoint that requires a role. The roles_required decorator
        will require that the supplied JWT includes the required roles
        .. example::
           $ curl http://localhost:5000/api/users -X GET \
              -H "Authorization: Bearer <your_token>"
    """
    users = User.query.all()
    user_details = []
    for user in users:
        user_d = {}
        user_d["username"] = user.username
        user_d["role"] = user.roles
        user_details.append(user_d)
    return {'users': user_details}, 200

@app.route('/api/cartesianPlot', methods=['POST'])
def CartesianGraph():
    request = flask.request.get_json(force=True)
    fileName = request.get('fileName', None)
    print("FileName is :", fileName)
    if fileName is None:
        return "Error: No fileName field provided. Please specify an fileName."
    # file = 'C:/R3D/HF_PST_PROCESSING_OUTPUT_FILES/' + fileName + '.dat'
    file = '/home/nithivarn/Downloads/' + fileName + '.dat'
    data = pd.read_csv(file, header=None, skiprows=3)
    data1 = data[0].str.split(expand=True)
    X, Y, Z = data1[0].astype('float').values, data1[1].astype('float').values, data1[2].astype('float').values
    print(Z)
    triang = tri.Triangulation(X, Y)
    tcf = plt.tricontourf(triang, Z, cmap='jet')
    plt.title(fileName, fontsize=14, fontweight='bold')
    plt.xlabel('X', fontsize=14, fontweight='bold')
    plt.ylabel('Y', fontsize=14, fontweight='bold')
    plt.colorbar()
    # plt.show()
    plt.savefig(fileName+'.png')
    return send_file(fileName+".png", mimetype='image/gif')

@app.route('/plot', methods=['POST'])
def LinePlot():
    request = flask.request.get_json(force=True)
    fileName = request.get('fileName', None)
    if fileName is None:
        return "Error: No fileName field provided. Please specify an fileName."

    #file = 'C:/R3D/HF_PROJECT_DATA/'+fileName+'.dat'
    file = '/home/nithivarn/Downloads/' + fileName + '.dat'
    data = pd.read_csv(file, skiprows=4, delim_whitespace=True, names=['x', 'y'])
    X, Y = data['x'].values, data['y'].values

    if ("Aper_at_injec_Frac" in fileName):
        xaxis = "time(min)"
        yaxis = "Fracture Aperture(m) at Injection Point"
    if ("Flowrate_Cluster" in fileName):
        xaxis = "time(min)"
        yaxis = "Flow rate (bpm)"
    if ("Length_Frac" in fileName):
        xaxis = "time(min)"
        yaxis = "Fracture length (m)"
    if ("Perforation_Fric_Cluster" in fileName):
        xaxis = "time(min)"
        yaxis = "Perforation friction (MPa)"

    plt.plot(X, Y)
    plt.xlabel(xaxis)
    plt.ylabel(yaxis)
    # plt.show()
    plt.savefig(fileName+'.png')
    return send_file(fileName+".png", mimetype='image/gif')

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
