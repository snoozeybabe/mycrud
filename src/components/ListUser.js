import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {AccountBox, DeleteForever} from '@material-ui/icons';
import Loader from '../components/Loader';
import {Input, Label} from 'reactstrap';
import WrappedModal from '../components/ModalRemove';
import EditForm from '../components/EditForm';




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
      users        : props.users ? props.users : [],
      loading      : props.loading,
      openModal    : false,
      selected     : null,
      openform     : false,
    }
    this.searchUser = this.searchUser.bind(this);
    this.editProfil = this.editProfil.bind(this);
    this.deleteUser = this.deleteUser.bind(this)
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
    }).catch((e)=> console.log(e))

    //TODO : Ajouter Catch

    //Todo : Créer un fetch génerique



  }


  editProfil = (e, user) => {
   e.preventDefault();
  
    this.setState({  
      selected : user,
      openModal : !this.state.openModal
      });
  }


  deleteUser = (e) => {
    
   const { selected, openModal } = this.state;
    this.props.onRemove(selected.id);
    this.setState({ openModal : !openModal});
    }


  onCloseForm =() =>{

  }

  updateForm =(e,user) =>{
    e.preventDefault();
    this.setState({ selected : user, openform : !this.state.openform})
  }

  seeProfil = _ => {

  }



  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if(nextProps !== this.props) {
      this.setState({ users : nextProps.users, loading :  nextProps.loading});
      
    }
  }

  renderUsers = (user) => {
    
    const { classes } = this.props;
    return( 
    <TableRow className = {classes.row} key = {user.id}>
        <CustomCell component="th" scope="row">{user.gender + " "+ user.lastname}</CustomCell>
        <CustomCell>{user.firstname}</CustomCell>
        <CustomCell>{user.age}</CustomCell>
        <CustomCell>{user.ndossier}</CustomCell>
        <CustomCell>{user.birthday}</CustomCell>
        <CustomCell>
          <AccountBox  onClick={e => this.updateForm(e, user)} />
          <DeleteForever onClick={e => this.editProfil(e, user)}/>
        </CustomCell>
      </TableRow>
    );
  }


  render() {
    const {users, selected}  =  this.state; 
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
              {
                users.map(user => this.renderUsers(user))
               }
            </TableBody>
          </Table>
          <WrappedModal 
            callbackClose={this.editProfil} 
            callbackRemove ={this.deleteUser}
            open={this.state.openModal ? this.state.openModal : false} 
            user={selected} 
          />
            <EditForm 
              open={this.state.openform} 
              closeForm={this.updateForm}
              user ={selected}
              />
          </Paper>
        
      </div>
    );
  }
}

ListUser.propTypes = {
  classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(ListUser);



