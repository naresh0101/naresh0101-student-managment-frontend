import React, { Component, Fragment } from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export class Logout extends Component {

    logout = ()=>{
       localStorage.clear()
    }
    render() {
        return (
           <Fragment>
            <ListItem button onClick={this.logout} >
            <ListItemIcon className="clrwhite">
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Logout`} />
            </ListItem>
           </Fragment>
        )
    }
}

export default Logout
