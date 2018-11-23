import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,Button, Form,FormGroup,Label,Input,FormText,Col,Row} from 'reactstrap';
import { SingleDatePicker } from 'react-dates';

import { withStyles } from  '@material-ui/core/styles';
import 'react-dates/lib/css/_datepicker.css';
import Grid from '@material-ui/core/Grid';

const styles = theme =>({
  root : {
    flexGrow : 1,
  },
  grid : {
    'backgroundColor' : '#BBDEFB' ,
  },

  col :{
    paddingLeft : 0,
  },
  row : {
    padding : 5,
    alignItems : 'center',
    justify : 'center'
  },
  
})

class FormUser extends Component {
  constructor(props){
    super(props);
    this.state =  {
      focused : true
    };
  }

  
  render() {
    const { classes } = this.props;

    return (
      
        <Grid className={classes.grid} container align="center" >
          <Grid item xs={12} >
          <Form>
            <FormGroup tag="fieldset" row className="col-sm-6" xs={6}>
              <Row className={classes.row}>
              <legend className="col-form-label col-sm-2"  style={{ paddingLeft: 0 }}>Civilité : </legend>
                <FormGroup check className="col-sm-2">
                    <Label check>
                      <Input type="radio" name="Mr"/>
                      Mr
                    </Label>
                  </FormGroup>
                <FormGroup check className="col-sm-2">
                    <Label check>
                      <Input type="radio" name="Mme"/>
                      Mme
                    </Label>
                </FormGroup>
                <FormGroup check className="col-sm-2">
                    <Label check>
                      <Input type="radio" name="Mlle"/>
                      Mlle
                    </Label>
                  </FormGroup>
              </Row>
              <Col>
                <FormGroup row>
                  <Label for="lastName">Nom :</Label>
                  <Input type="text" name="firstName" placeholder="Nom"/>
                </FormGroup>
                <FormGroup row>
                  <Label for="firstName">Prenom :</Label>
                  <Input type="text" name="lastName" placeholder="Prenom"/>
                </FormGroup>
                <Row flexGrow>
                <Col xs="4" className={classes.col} >
                <FormGroup >
                  <Label style={{ float  :'left', paddingLeft: 0 }} className="mr-sm-2"for="age">Age : </Label>
                  <Input type="date" name="age" />
                </FormGroup>
                </Col>
                <Col xs="6">
                <FormGroup >
                  <Label style={{ float  :'left' }} for="nDossier">N°dossier:</Label>
                  <Input type="text" name="nDossier" placeholder="N° dossier :"/>
                </FormGroup>
                </Col>
                <Button block color="success">Submit</Button>
                </Row>
              </Col>
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