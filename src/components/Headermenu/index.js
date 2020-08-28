import React,{useState} from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BusinessIcon from '@material-ui/icons/Business';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import LocationCityIcon from '@material-ui/icons/LocationCity'
import Logout from "../Logout";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export default function SIdemenu() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const userdata = JSON.parse(localStorage.getItem('user'))[0] 
    
  if(userdata.usertype === "Student"){
    return(
      <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <ListItem>
          <ListItemIcon className="clrwhite">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={userdata.name.split(" ")[0]}  />
            </StyledBadge>
          </ListItemIcon>
            <ListItemText className="clrwhite">{`Hello ${userdata.name.split(" ")[0]}`} <div className="usertype">{userdata.usertype}</div></ListItemText>
        </ListItem>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
       <Link to="/dashboard/admin">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Home`} />
          </ListItem>
        </Link>
        <Link to="/dashboard/profile">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Profile`} />
          </ListItem>
        </Link>
        <Link to="/login" >
            <Logout />
        </Link>
      </List>
    </Drawer>
    )
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <ListItem>
          <ListItemIcon className="clrwhite">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt={userdata.adminName.split(" ")[0]} />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText className="clrwhite">{`Hello ${userdata.adminName.split(" ")[0]}`} <div className="usertype">Admin</div></ListItemText>
        </ListItem>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
       <Link to="/dashboard/admin">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Home`} />
          </ListItem>
        </Link>
        <Link to="/dashboard/students">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Students `} />
          </ListItem>
        </Link>
        <Link to="/addorg">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Add Organisation`} />
          </ListItem>
        </Link>
        <Link to="/dashboard/addstudent">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <CastForEducationIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Add student`} />
          </ListItem>
        </Link>
        <Link to="/dashboard/profile">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Profile`} />
          </ListItem>
        </Link>
        <Link to="/login" >
            <Logout />
        </Link>
      </List>
    </Drawer>
  );
} 
