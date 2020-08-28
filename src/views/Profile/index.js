import React, { Component, Fragment } from "react";
import {
      Typography,
  Avatar,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import CallIcon from '@material-ui/icons/Call';

 class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user"))[0]
    };
  }

  render() { 
    return (
        <main style={{marginTop:"100px"}} className="container-fluid p-3">
           
            <br/>
            <div className="custom-shadow col-md-8  m-3">
                <div className="p-2 d-flex justify-content-between bg-light">
                  <div className="d-flex justify-content-start ">
                    <Avatar alt={"naresh"} className="border mr-3" src={this.state.user.orgLogo ||this.state.user.profile } />
                        <Typography variant="h6" >
                            {this.state.user.orgName ||this.state.user.name }
                        </Typography>
                  </div>
                  <Chip label={this.state.user.website || this.state.user.status} target="_black"  component="a" href={this.state.user.websit} />
                </div>
                <div className="p-3">
                <Typography color="textSecondary" gutterBottom>
                    {this.state.user.describe}
                </Typography>
                </div>
                {
                  this.state.user.usertype === "Student" ? (
                    <Fragment>
                    <div className="pl-2 pb-2 d-flex justify-content-start">
                        <CallIcon className="mr-3 " style={{color:"gray" }}/>
                      <p >{this.state.user.phone}</p>
                    </div>   
                    </Fragment> 
                  ) : (
                    <Fragment>
                    <div className="pl-2 pb-2 d-flex justify-content-start">
                        <SettingsIcon className="mr-3 mt-1" style={{color:"gray" }}/>
                      <Chip label={this.state.user.adminName}/>
                    </div>   
                    <div className="pl-2 pb-2 d-flex justify-content-start">
                        <MailIcon className="mr-3 mt-1" style={{color:"gray" }}/>
                      <Chip label={this.state.user.email}/>
                    </div>
                    <div className="pl-2 pb-2 d-flex justify-content-start">
                        <LocationOnIcon className="mr-3 mt-1" style={{color:"gray" }}/>
                      <Chip label={this.state.user.address}/>
                    </div> 
                    </Fragment> 
                  )
                } 
            </div>
        </main>
    );
  }
}

export default Profile;