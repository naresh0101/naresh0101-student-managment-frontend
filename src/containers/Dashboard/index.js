import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Admin from '../../views/Admin';
import Addstudent from '../../views/Addstudent';
import Header from '../../components/Header';
import PageNotFound from "../../views/PageNotFound"
import Profile from "../../views/Profile";
import { makeStyles } from "@material-ui/core/styles";
import Mystudent from '../../views/Mystudent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Header />  
      <Switch>
        <Route exact path="/dashboard" component={Admin} />
        <Route exact path="/dashboard/admin" component={Admin} />
        <Route exact path="/dashboard/Addstudent" component={Addstudent} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/students" component={Mystudent} />
        <Route  component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Dashboard;
