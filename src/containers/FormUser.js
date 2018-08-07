import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,Button, Form,FormGroup,Label,Input,FormText,Col,Row} from 'reactstrap';

import { withStyles } from  '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme =>({
  root : {
    flexGrow : 1,
  },
  grid : {
    'backgroundColor' : 'grey' ,
  },
  row : {
    padding : 5,
    alignItems : 'center'
  }
})

class FormUser extends Component {
  constructor(props){
    super(props);
    this.state =  [];
  }

  
  render() {
    const { classes } = this.props;

    return (
      
        <Grid className={classes.grid} container align="center" >
          <Grid item xs={12} >
          <Form>
            <FormGroup tag="fieldset" row className="col-sm-4" xs={2}>
              <Row className={classes.row}>
              <legend className="col-form-label col-sm-2">Civilité</legend>
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
                  <Label for="firstName">Nom</Label>
                  <Input type="text" name="firstName" placeholder="Nom"/>
                </FormGroup>
                <FormGroup row>
                  <Label for="firstName">Prenom</Label>
                  <Input type="text" name="lastName" placeholder="Prenom"/>
                </FormGroup>
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