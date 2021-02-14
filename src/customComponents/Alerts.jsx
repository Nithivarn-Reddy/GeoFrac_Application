import React from 'react';
import { Form, Col, Button } from "react-bootstrap";

function Alert() {
    const [showPopup, setShowPopup] = React.useState(false);

const toggleShowInfoPopup = () => {
    setShowPopup(!showPopup);
  };

return (
  <div>
    <div className="alert alert-warning alert-dismissible" role="alert">
      <button 
        type="button" 
        className="close" 
        data-dismiss="alert" 
        aria-label="Close"
        onClick={toggleShowInfoPopup}
        >
        <span aria-hidden="true">&times;</span>
        </button>
      Error
    </div>
  </div>
);
}

export default Alert;