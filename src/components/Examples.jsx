import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import NavBar from '../components/NavBar';


class Examples extends Component {
    state = {  }

    
    handleSubmit = async () => {
        console.log("submit clicked");
        if (localStorage.getItem("jwt-token") !== null) {
          let token = "Bearer " + JSON.parse(localStorage.getItem("jwt-token")).jwt;
          const response = await fetch("/api/examples", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "csv",
              Authorization: token,
            },
          });
          if (response.status === 200) {
            const data = await response.blob();
            console.log(data);
            const url = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'R3D_New_Examples.rar');
            document.body.appendChild(link);
            link.click();

          } else {
            //document.getElementById("message").style.display = "block";
            console.log("Failed");
          }
        } else {
          console.log("No Token available");
          this.props.history.push("/");
        }
      };

    render() { 
        return ( 
            <div >
            <NavBar />
            <div style={{ display:"flex", alignItems:'center', height: '50vh', width: "200vh", justifyContent: "center"}}>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Download
            </Button>
            </div>
            </div>
        );
    }
}
 
export default Examples;