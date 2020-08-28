import React, { Component, Fragment } from "react";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import Alert from "@material-ui/lab/Alert";
import StudentApi from "../../api/student"
import { Redirect } from "react-router-dom";

 class Addstudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      activestatus : true,
      rolesstatus : 1,
      open:true,
      errormsg: "",
      alerttype:'info',
      alert:"none",
      sendtostudents : false
    };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleActive = (e) =>{
      this.setState({activestatus : e.target.value})
  }
  handleRole = (e) =>{
    this.setState({rolesstatus : e.target.value})
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user"))
    const  admin = data[0]
    const payload = {
      phone :  e.target.elements.phone.value,
      password: e.target.elements.password.value,
      name : e.target.elements.studentname.value,
      describe: e.target.elements.describe.value,
      orgArray : {orgId : admin._id, roles : this.state.rolesstatus, active:this.state.activestatus}
    }
    StudentApi.Addstudent(localStorage.getItem("token"), payload).then((resp)=>{
      if (resp.success) {        
        this.setState({sendtostudents : true, open:true})
       }
       this.setState({ errormsg: resp.message, alerttype: "error",alert:"block" });
    })
  }
  handleCancle = ()=>{
    this.setState({open : !this.state.open})
  }

  render() { 
    if(this.state.sendtostudents){
     return(
      <Redirect to="/dashboard/students" />
     )
    }
    return (
       <div style={{marginTop:"150px"}} className="container">
          <div className="d-flex justify-content-center m-3">
           <div className="col-md-8 custom-shadow p-3">
                <form onSubmit={this.handleSubmit} className="mb-2">
            <Alert severity={this.state.alerttype} style={{ display: this.state.alert, marginTop: "50px" }}>
              {this.state.errormsg}
            </Alert>
              <div className="account-img">
              <Typography className="ml-2">
              </Typography>
                <OutlinedInput
                  className="mt-3"
                  fullWidth
                  margin="dense"
                  placeholder="Name"
                  type="text"
                  name = "studentname"
                />
                <div className="row mt-3">
                  <div className="col-md-6">
                  <FormControl 
                      margin="dense"
                      style={{width:"100%"}} variant="outlined" >
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        value={this.state.rolesstatus}
                        onChange={this.handleRole}
                      >
                        <MenuItem value={1}>Roles One</MenuItem>
                        <MenuItem value={2}>Roles Two</MenuItem>
                      </Select>
                  </FormControl>
                  </div>
                  <div className="col-md-6">
                  <FormControl 
                      margin="dense"
                      style={{width:"100%"}} variant="outlined" >
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        value={this.state.activestatus}
                        onChange={this.handleActive}
                      >
                        <MenuItem value={false}>Pending</MenuItem>
                        <MenuItem value={true}>Active</MenuItem>
                      </Select>
                  </FormControl>
                  </div>
                </div>
                <OutlinedInput
                  className="mt-3"
                  fullWidth
                  margin="dense"
                  placeholder="Describe you student 5 to 100 Char"
                  type="text"
                  style={{height:"100px"}}
                  name = "describe"
                />
                <OutlinedInput
                  className="mt-3"
                  fullWidth
                  margin="dense"
                  placeholder="Phone number"
                  type="number"
                  name="phone"
                />
                <OutlinedInput
                  className="mt-3"
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
              </div>
              <DialogActions>
                <Button  color="primary">
                  Cancle
                </Button>
                <Button autoFocus
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                  disableElevation>
                  Add 
                </Button>
              </DialogActions>
            </form>
                </div>
            </div>
       </div>
    );
  }
}

export default Addstudent;