import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  color : 'blue',
  backgroundColor : 'red',
};


class About extends Component {
  render() {
    return (
      <div style={styles}>
        <h1>About</h1>
      </div>
    );
  }
}

export default withStyles(styles)(About);