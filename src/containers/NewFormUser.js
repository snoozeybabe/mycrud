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
              <Container>
                <Row className={classes.row}>
                  <Col md="12" className={classes.col}>
                    <Row className={classes.row} >
                    <legend className="col-form-label col-sm-1"  style={{ paddingLeft: 0 }}>Civilité : </legend>
                    <FormGroup check className="col-sm-1">
                    <Label check>
                      <Input type="radio" name="Mr"/>
                      Mr
                    </Label>
                  </FormGroup>
                <FormGroup check className="col-sm-1">
                    <Label check>
                      <Input type="radio" name="Mme"/>
                      Mme
                    </Label>
                </FormGroup>
                <FormGroup check className="col-sm-1">
                    <Label check>
                      <Input type="radio" name="Mlle"/>
                      Mlle
                    </Label>
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