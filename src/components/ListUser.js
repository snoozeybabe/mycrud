import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    overflowX : 'auto'
  },
  table : {
    minWidth : 700,
  },
  row : {
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
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ =>{
    fetch('/users')
    .then(res => res.json())
    .then( ({ data }) => { 
      this.setState({users : data})
    } )
    .catch(err => console.log(err))
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
      </TableRow>
    );
  }


  render() {
    const {users}  =  this.state; 
    const { classes } = this.props;
    return (
      <div>
        <h1>List </h1>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomCell>Nom </CustomCell>
                <CustomCell>Prenom </CustomCell>
                <CustomCell numeric >Age </CustomCell>
                <CustomCell>N° Dossier </CustomCell>
                <CustomCell>Date Naissance </CustomCell>
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