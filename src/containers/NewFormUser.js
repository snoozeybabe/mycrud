import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../components/UserForm';

import { getUserList } from '../userApi/userApi';

import { withStyles } from  '@material-ui/core/styles';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';

const styles = theme =>({
  root : {
    flexGrow : 1,
      outline :'none!important',
  },
  grid : {
    'backgroundColor' : 'white' ,
  },

  col :{
   // paddingLeft : 0,
    backgroundColor : 'red'
  },
  row : {
    padding : 5,
    alignItems : 'center',
    justify : 'center',
    backgroundColor : 'white'
  },
  button :{
    outline :'none!important'
  }
  
});

class FormUser extends Component {
  constructor(props){
    super(props);
    this.state =  {
      gender      : '',
      lastname    : '',
      firstname   : '',
      birthday    : '',
      ndossier    : '',
      commentaire : ""
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputOnChange = this._handleInputOnChange.bind(this);
  }


  insertUsers = datas =>{
    if(!datas) return;
      fetch("/users/add", {
        method : 'POST',
        headers: {'Content-type' : 'application/json'},
        body   : JSON.stringify(datas)
      })
      .then(res => {
          if(res.status >= 400) throw new Error("Bad server response");
          //return res.json(); 
      })
      .then(function(datas) {
        if(datas === "success") console.log("User added here ");
      })
      .catch(err => console.log(err));
  }
  _handleSubmit = e => {
    this.insertUsers(this.state);
    e.preventDefault();
  }

  _handleInputOnChange(e){
    getUserList();
    const target = e.target;
    const name = target.name;
    this.setState({
      [name] : target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
        <Grid className={classes.grid} container align="center" >
          <Grid item xs={12} >
            <UserForm user={this.state} isNew={true}/>
          </Grid>
        </Grid>
    );
  }
}

FormUser.propTypes = {
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(FormUser);