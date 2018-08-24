import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container,Alert,Button, Form,FormGroup,Label,Input,FormText,Col,Row} from 'reactstrap';
import { SingleDatePicker } from 'react-dates';

import { withStyles } from  '@material-ui/core/styles';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';

const styles = theme =>({
  root : {
    flexGrow : 1,
    outline : 'none',
  },
  grid : {
    'backgroundColor' : '#BBDEFB' ,
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
  
})

class FormUser extends Component {
  constructor(props){
    super(props);
    this.state =  {
      gender      : '',
      lastName    : '',
      firstName   : '',
      birthDay    : '',
      nDossier    : '',
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
        if(datas == "success") console.log("User added here ");
      })
      .catch(err => console.log(err));
  }
  _handleSubmit = e => {
    this.insertUsers(this.state);
    e.preventDefault();
  }

  _handleInputOnChange(e){
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
          <Form onSubmit={this._handleSubmit}>
            <FormGroup tag="fieldset" row className="col-sm-12" xs={6}>
              <Container>
                <Row className={classes.row}>
                  <Col md="12" className={classes.col}>
                    <Row className={classes.row} >
                      <legend className="col-form-label col-sm-1"  style={{ paddingLeft: 0 }}>Civilité : </legend>
                        <FormGroup check className="col-sm-1">
                            <Label check>
                              <Input type="radio" name="gender" value="Mr" onChange={this._handleInputOnChange}/>
                              Mr
                            </Label>
                          </FormGroup>
                        <FormGroup check className="col-sm-1">
                            <Label check>
                              <Input type="radio" name="gender" value="Mme" onChange={this._handleInputOnChange}/>
                                Mme
                            </Label>
                        </FormGroup>
                        <FormGroup check className="col-sm-1">
                          <Label check>
                              <Input type="radio" name="gender" value="Mlle" onChange={this._handleInputOnChange}/>
                                Mlle
                            </Label>
                        </FormGroup>
                    </Row>

                    <Row className={classes.row}>
                      <FormGroup row className="col-sm-12" >
                        <Label>Nom</Label>
                        <Input type="text" placeholder="Nom" name="lastName" id="lastName" onChange={this._handleInputOnChange}/>
                      </FormGroup>
                    </Row>

                    <Row className={classes.row}>
                      <FormGroup  row className="col-sm-12" >
                        <Label>Prenom</Label>
                        <Input type="text" placeholder="Prenom" name="firstName" id="firstName" onChange={this._handleInputOnChange}/>
                      </FormGroup>
                    </Row>

                    <Row className={classes.row}>
                      <FormGroup  row className="col-sm-4" >
                        <Label>Date de naissance </Label>
                        <Input type="date" placeholder="Date de naissance" name="birthDay" id="birthDay" onChange={this._handleInputOnChange}/>
                      </FormGroup>
                      <FormGroup row className="col-sm-5 offset-1" >
                      <Label>N° Dossier</Label>
                      <Input type="text" placeholder="N° Dossier" name="nDossier" id="nDossier" onChange={this._handleInputOnChange}/>
                    </FormGroup>
                    </Row>

                    <Row className={classes.row}>
                      <FormGroup row  className="col-sm-12">
                        <Label>Commentaire</Label>
                        <Input type="textarea" name="commentaire" id="commentaire" onChange={this._handleInputOnChange} />
                      </FormGroup>
                      </Row>

                    <Row className={classes.row}>
                      <FormGroup row className="col-sm-10" >
                        <Col sm={{ size : 10, offset : 9}}>
                          <Button color="primary">Ajouter</Button>{'  '}
                        </Col>
                      </FormGroup>
                    </Row>

                  </Col>
                </Row>
              </Container>
            </FormGroup>
          </Form>
          </Grid>
          </Grid>
    );
  }
}

FormUser.propTypes = {
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(FormUser);