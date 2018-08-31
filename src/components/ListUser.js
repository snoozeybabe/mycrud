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
import {Today,AccountBox, DeleteForever} from '@material-ui/icons';
import Loader from '../components/Loader';
import {Input, Label} from 'reactstrap';
import ModalRemove from '../components/ModalRemove';






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
  core :{
    position       : 'absolute',
    width          : theme.spacing.unit * 50,
    backgrounColor : theme.palette.background.paper,
    boxShadow      : theme.shadows[5],
    padding        : theme.spacing.unit * 4
  }
});


class ListUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      loading : true,
      openModal : false,
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
    this.setState({ openModal : !this.state.openModal});
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
        <AccountBox onClick={() => { this.editProfil()}} />

        <Today/>
        <DeleteForever/>
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
          <ModalRemove  className={classes.core} open={this.state.openModal}/>
          </Paper>
        
      </div>
    );
  }
}

ListUser.propTypes = {
  classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(ListUser);