import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';




 function getModalStyle (){
   const top = 50 ;
   const left = 50 ;

   return {
     marginTop : `${top}%`,
     left : `${left}%`,
     transform: `translate(-${top}%, -${left}%)`,
   };
 }

const styles = theme =>({
  modal :{
    position       : 'absolute',
    width          : theme.spacing.unit * 50,
    backgrounColor : theme.palette.background.paper,
    boxShadow      : theme.shadows[5],
    padding        : theme.spacing.unit * 4
  }
})
 


const ModalRemove = ({open,classes}) => {
  return (
    <div>
      <Modal   
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open} onClose={() => { open = false}}>
        <div style={getModalStyle()} className={classes.modal}>
        <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          <WrappedModal/>
        </div>
      </Modal>
    </div>
  );
};

ModalRemove.propTypes = {
  classes : PropTypes.object.isRequired
};

const WrappedModal = withStyles(styles)(ModalRemove)

export default WrappedModal;