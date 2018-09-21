import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { css } from 'react-emotion';
import  { PacmanLoader } from 'react-spinners';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';


const styles = themes => ({
  root  : {
    flexGrow : 1,
    backgroundColor : 'red',
    height : '100%'
  },
});

const override = css`
  display : block;
  border-color : red;
  position: absolute!important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

`;

const Loader = props => {
  
  return (
  //  <div className={classes.root}>
        <PacmanLoader
          className={override}
          sizeUnit={"px"}
          size={60}
          color={'#123abc'}
          loading={props.loading}
         />
    //</div>
  );
};

Loader.propTypes = {
  loading : PropTypes.bool.isRequired,
  classes  : PropTypes.object.isRequired
};

export default withStyles(styles)(Loader);