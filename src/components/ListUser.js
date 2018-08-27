import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Alarm from '@material-ui/icons/Alarm';
import Today from '@material-ui/icons/Today';
import Loader from '../components/Loader';
import {Input, Label} from 'reactstrap';



function HomeIcon(props) {
  return (
    <SvgIcon {...props}  width="24" height="24" >
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </SvgIcon>
  );
}
function DeleteIcon(props) {
  return (
    <SvgIcon {...props}  width="18" height="18" >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
    </SvgIcon>
  );
}
function ProfilIcon(props) {
  return (
    <SvgIcon {...props}  width="18" height="18" >
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
    </SvgIcon>
  );
}



const CustomCell = withStyles(theme => ({
  head : {
    backgroundColor : '#3F51B5',
    color : theme.palette.common.white
  },
  body : {
    fontSize : 14,
  },


}))(TableCell);

const styles = theme => ({
  root : {
    witdh : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : 'auto',
  },
  table : {
    minWidth : 700,
    overflowY : 'visible'
  },
  icon: {
    padding : 'none' ,
  },
  label : {
    marginLeft : 3,
    float : 'left'
  },
  searchbar : {
    fontStyle : 'italic'
  },
  row : {
    height : 40,
    '&:nth-of-type(odd)' : {
      backgrounColor : theme.palette.background.default,
    },
  },
});


class ListUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      loading : true
    }
    this.searchUser = this.searchUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    this.setState({ loading : true});
  }

  

  getUsers = _ =>{
    fetch('/users')
    .then(res => res.json())
    .then( ({ data }) => { 
      this.setState({users : data})
      this.setState({loading : false})
    } )
    .catch(err => console.log(err))
  }

  searchUser = e =>{
    const target = e.target;
    var searchName = { firstName : target.value}
    fetch('/users/search',{
      method : 'POST',
      headers : { 'Content-type' : 'application/json'},
      body : JSON.stringify(searchName)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({users : data});
    })



  }
  editProfil = _ => {
    alert("What")
  }
  deleteUser = _ => {

  }
  seeProfil = _ => {

  }

  renderUsers = (user) => {
    const { classes } = this.props;
    return( 

    
    <TableRow className = {classes.row} key = {user.id}>
        <CustomCell component="th" scope="row">{user.civilite + " "+ user.nom}</CustomCell>
        <CustomCell>{user.prenom}</CustomCell>
        <CustomCell>{user.age}</CustomCell>
        <CustomCell>{user.n_dossier}</CustomCell>
        <CustomCell>{user.date_naissance}</CustomCell>
        <CustomCell>
          <Today/>
          <ProfilIcon className={classes.icon} onClick={() => { this.editProfil()}} />
          <HomeIcon className={classes.icon} />
          <DeleteIcon className={classes.icon} />
        </CustomCell>
      </TableRow>
    );
  }


  render() {
    const {users}  =  this.state; 
    const { classes } = this.props;

    if(this.state.loading){
      return <Loader loading={this.state.loading}/>     
    }

    return (
      <div>
        <h1>List </h1>
        <Label className={classes.label}>Recherche de patient</Label>
        <Input className={classes.searchbar} placeholder="Nom,prenom,numero de dossier ..." onChange={this.searchUser}/>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomCell>Name </CustomCell>
                <CustomCell>Prenom </CustomCell>
                <CustomCell numeric >Age </CustomCell>
                <CustomCell>N°Doss </CustomCell>
                <CustomCell>Date Nai. </CustomCell>
                <CustomCell></CustomCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user =>{
                return(
                  this.renderUsers(user)
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

ListUser.propTypes = {
  classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(ListUser);