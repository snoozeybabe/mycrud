import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './../images/logo.svg';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import About from './About';
import Infos from './Infos';
import ListUser from './ListUser';
import FormUser from '../containers/FormUser'

const styles = {
  root :{
    flexGrow : 1,
  },

  flex :{
    flex : 1,
  },

  link : {
    textDecoration : 'none',
  }

};

 function NavBar(props){

    const { classes } = props;

    return (
      <Router>
      <div>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link   style={{ textDecoration: 'none' }} to="/">
          <img src={logo} className='App-logo' alt="Logo" />
          </Link>
            
          <Typography variant="title" className={classes.flex}>
            ReactCrud
          </Typography>
          <Link className={classes.link} to='/'><Button  className={classes.button} color="inherit">Home</Button></Link>
          <Link className={classes.link} to='/userlist'>  <Button  className={classes.button} color="inherit"> List </Button></Link>
          <Link className={classes.link} to='/adduser'>  <Button  className={classes.button} color="inherit">Form</Button></Link>
          <Link className={classes.link} to='/about'>  <Button  className={classes.button} color="inherit">About</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
      <Route exact path='/' component={Infos}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/userlist' component={ListUser}/>
      <Route exact path='/adduser' component={FormUser}/>
      </div>
    </Router>

    );
    
}

NavBar.propTypes = {
  classes : PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
