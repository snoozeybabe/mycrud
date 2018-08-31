import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const styles = theme =>({
  core :{
    position       : 'absolute',
    width          : theme.spacing.unit * 50,
    backgrounColor : 'red',
    boxShadow      : theme.shadows[5],
    padding        : theme.spacing.unit * 4
  }
})
 

const ModalRemove = (props) => {

  return (

    <div>
      <Modal  className={props.classes.core} open={props.open}>
        <h2>What </h2>
      </Modal>
    </div>
  );
};

ModalRemove.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styles)(ModalRemove);