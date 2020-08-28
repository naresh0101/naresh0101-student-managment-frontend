import React, { Component } from "react";
import {
  Card,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, Redirect } from "react-router-dom";
import image from "../../assets/images/login-sign-up.png"
import orgAPI from "../../api/org"
import studentsAPI from "../../api/student"

import Alert from "@material-ui/lab/Alert";

 class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      token: null,
      errormsg: "login with your credentials",
      alerttype:'info',
      alert:"none"
    };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const emailorphone = event.target.elements.emailorphone.value,
          password  = event.target.elements.password.value
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(emailorphone)){
      const payload = {
        email: event.target.elements.emailorphone.value,
        password: password
      };
      orgAPI.loginAdmin(payload).then((resp) => {
        if (resp.success) {        
          localStorage.setItem('token',resp.token)
          localStorage.setItem('user', JSON.stringify([resp.org]))
        }
        this.setState({ errormsg: resp.message, alerttype: "error",alert:"block" });
      });

    }else{
        const payload = {
          phone: event.target.elements.emailorphone.value,
          password: event.target.elements.password.value
        };
        studentsAPI.loginstudent(payload).then((resp) => {
          if (resp.success) { 
            localStorage.setItem('token',resp.token)
            localStorage.setItem('user', JSON.stringify([resp.student]))
        }
        this.setState({ errormsg: resp.message, alerttype: "error",alert:"block" });
        });
    }
  };
  render() { 
    if(localStorage.getItem("token")){
      return(
        <Redirect to="/dashboard" />
      )
    }
    return (
        <div className="container">
          <Card
            className="row shadow d-flex justify-content-center"
            style={{ marginTop: "200px",paddingTop:'50px',paddingBottom:"50px"}}
          >
           
            <div className="col-md-5 account-img">
              <img alt="" width="100%" src={image} />
            </div>
            <div className="col-md-5 text-left" style={{ marginTop: "30px" }}>
              <Typography className="ml-2">
                <span
                  style={{
                    color: "#333232",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </span>
              </Typography>
              <Typography color="textSecondary" className="ml-2">
                welcome back !
              </Typography>
              <Alert severity={this.state.alerttype} style={{ display: this.state.alert, marginTop: "50px" }}>
              {this.state.errormsg}
            </Alert>
              <br />
              <form onSubmit={this.handleSubmit} className="p-2 mb-2">
                <OutlinedInput
                  className="mt-2"
                  fullWidth
                  margin="dense"
                  placeholder="Email or phone number"
                  name="emailorphone"
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <MailIcon style={{ color: "gray" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <OutlinedInput
                  className="mt-2"
                  fullWidth
                  margin="dense"
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  endAdornment={
                    <InputAdornment>
                      <IconButton onClick={this.handleClickShowPassword}>
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <div className="d-flex justify-content-between">
                  <Link to="/forgotpassword">
                    <Button color="primary" size="small" className="clrgry">
                      forgot password ?
                    </Button>
                  </Link>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                    disableElevation
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
    );
  }
}
export default Login;
