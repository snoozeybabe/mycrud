import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/'
import 'bootstrap/dist/css/bootstrap.min.css';




const styles = {
  color : 'blue',
};

const divdate = {
  width : 500,
  height : 600,
  marginTop : 500
}




class About extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div style={styles}>
        <div>
        <h1>About</h1>
        </div>
        <div style={divdate} >
        <Paper>       
        </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);