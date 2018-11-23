import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { updateUser} from '../actions';
import { Container,Button, Form,FormGroup,Label,Input,Col,Row} from 'reactstrap';


const styles = theme =>({
  root : {
    flexGrow : 1,
      outline :'none!important',
  },
  grid : {
    'backgroundColor' : 'white' ,
  },

  col :{
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
const initialState ={
  id          : null,
  gender      : '',
  lastname    : '',
  firstname   : '',
  birthday    : '',
  ndossier    : '',
  commentaire : ""
}

var userUpdate = {};


class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    this._handleFormClose = this._handleFormClose.bind(this);
  }

  
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.user !== nextProps.user) return true;
    if(this.state !== nextState) return true;    
    return false;
  }
  
  
  componentWillMount(nextProps) {
    const { dispatch }  = this.props;
    dispatch(updateUser(this.props.user));
    const { user } = this.props;
    console.log(user)
    const existingUser ={  
       id          : user.id,
       gender      : user.gender,
       lastname    : user.lastname,
       firstname   : user.firstname,
       birthday    : user.birthday,
       ndossier    : user.ndossier,
       commentaire : user.commentaire
    };

    if(nextProps !== this.props){
      this.setState(() => this.props.isNew ? initialState : existingUser);
    }
  }
  
  insertUsers = datas =>{
    
    if(!datas) return;
      fetch("/users/add", {
        method : 'POST',
        headers: {'Content-type' : 'application/json'},
        body   : JSON.stringify(datas)
      }).then(res => {
          if(res.status >= 400) throw new Error("Bad server response"); 
      }).then(function(datas) {
         userUpdate = {};
        if(datas === "success") console.log("User added here ");
      }).catch(err => console.log(err));
      this.setState(initialState);
  }


  

  _handleSubmit = e => {
    e.preventDefault();
    this.insertUsers(this.state.id ? {id : this.state.id, datas : userUpdate} : this.state);
    this.props.history.push(this.state.id ? '/userlist':'/adduser');
  }

  _handleInputOnChange(e){
    if(!e) return;
    const target = e.target;
    const name = target.name;
    if(this.state.id) {
      userUpdate = Object.assign(userUpdate,{ [name] : target.value});
    }

    this.setState({
      [name] : target.value
    })
  }

  _handleFormClose(e){
    console.log("Trying to close");
    console.log(this.props);
  }
  render(){
    const { classes, isNew } = this.props;
    return(
      <Form >
      <FormGroup tag="fieldset" row className="col-sm-12" xs={6}>
                    <Container>
                      <Row className={classes.row}>
                        <Col md="12" className={classes.col}>
                          <Row className={classes.row} >
                            <legend className="col-form-label col-md-2 col-sm-2"  style={{ paddingLeft: 0 }}>Civilité : </legend>
                              <FormGroup check className="col-lg-2 col-sm-4" value={this.state.gender}>
                                  <Label check>
                                    <Input type="radio" name="gender" value="Mr" onChange={(e) => this._handleInputOnChange(e)}/>
                                    Mr
                                  </Label>
                                </FormGroup>
                              <FormGroup check className="col-lg-2 col-sm-2">
                                  <Label check>
                                    <Input type="radio" name="gender" value="Mme" onChange={(e) => this._handleInputOnChange(e)}/>
                                      Mme
                                  </Label>
                              </FormGroup>
                              <FormGroup check className="col-lg-2 col-sm-2">
                                <Label check>
                                    <Input type="radio" name="gender" value="Mlle" onChange={(e) => this._handleInputOnChange(e)}/>
                                      Mlle
                                  </Label>
                              </FormGroup>
                          </Row>
      
                          <Row className={classes.row}>
                            <FormGroup row className="col-sm-12" >
                              <Label>Nom</Label>
                              <Input type="text" name="lastname" id="lastName" onChange={(e) => this._handleInputOnChange(e)} value={this.state.lastname}/>
                            </FormGroup>
                          </Row>
      
                          <Row className={classes.row}>
                            <FormGroup  row className="col-sm-12" >
                              <Label>Prenom</Label>
                              <Input type="text" name="firstname" id="firstName" onChange={(e) => this._handleInputOnChange(e)} value={this.state.firstname}/>
                            </FormGroup>
                          </Row>
      
                          <Row className={classes.row}>
                            <FormGroup  row className="col-sm-4" >
                              <Label>Date de naissance </Label>
                              <Input type="date" name="birthday" id="birthDay" onChange={(e) => this._handleInputOnChange(e)} defaultValue={this.state.birthday}/>
                            </FormGroup>
                            <FormGroup row className="col-sm-5 offset-1" >
                            <Label>N° Dossier</Label>
                            <Input type="text"  name="ndossier" id="nDossier" onChange={(e) => this._handleInputOnChange(e)} defaultValue={this.state.ndossier}/>
                          </FormGroup>
                          </Row>
      
                          <Row className={classes.row}>
                            <FormGroup row  className="col-sm-12">
                              <Label>Commentaire</Label>
                              <Input type="textarea" name="commentaire" id="commentaire" onChange={(e) => this._handleInputOnChange(e)} defaultValue={this.state.commentaire} />
                            </FormGroup>
                            </Row>

                          <Row className={classes.row}>
                            <FormGroup row className="col-sm-12" >
                              <Col sm={{ size : 8, offset : 7}}>
                                <Button className={classes.button} color="primary" onClick={this._handleSubmit}>Ajouter</Button>{'  '}
                                { !isNew &&
                                  <Button className={classes.button} color="danger" onClick={this._handleFormClose}>Annuler</Button>
                                }
                              </Col>
                            </FormGroup>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </FormGroup>
                </Form>
    )
  }
}


UserForm.propTypes = {
  classes : PropTypes.object.isRequired
}

const mapStateToProps = state =>{
  return {
    data  : state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateRequest = () => dispatch({ type : "UPATE_USER", data});
  }
}
export default connect(mapStateToProps)(withStyles(styles)(withRouter(UserForm)));


  
  



