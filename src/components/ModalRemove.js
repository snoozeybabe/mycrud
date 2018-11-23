import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'



 function rand(){
   return Math.round(Math.random()*20) - 10;
 }
 function getModalStyle (){
   const top = 50 + rand();
   const left = 50 + rand() ;
   return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    textAlign : 'center'
   };
 }

const styles = theme =>({
  modal :{
    position       : 'absolute',
    width          : theme.spacing.unit * 60,
    height          : theme.spacing.unit * 30,
    backgroundColor : theme.palette.background.paper,
    boxShadow      : theme.shadows[5],
    padding        : theme.spacing.unit * 4
  },
  buttonpop :{
    width : '100%',
    bottom : 0
  },
  buttongroup: {
    marginTop : '20%'
  }
})

 
//TODO : Transformer en composant functionnel.
const  ModalRemove = ({ classes, open, user, callbackClose, callbackRemove}) => {
  const tmpUser = user ? user: {};
  return (
    <div>
      <Modal   
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open ? open : false} onClose={ callbackClose}>
        <div style={getModalStyle()} className={classes.modal}>
          <Grid >    
        <Typography variant="title" id="modal-title">
              Supprimer utilisateur 
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
             Voulez-vous vraiment supprimé {tmpUser.lastname} {tmpUser.firstname} ?
            </Typography>
            <WrappedModal/>
        </Grid>
        <Grid className={classes.buttongroup}>
            <Button className={classes.buttonpop} color="primary" variant="contained" onClick={callbackRemove}>Confirmer</Button>
            <Button className={classes.buttonpop} color="secondary" variant="contained" onClick={callbackClose}>Annuler</Button>
        </Grid>
        </div>
      </Modal>
    </div>
  )}


ModalRemove.propTypes = {
  classes : PropTypes.object.isRequired,
  
};

const WrappedModal = withStyles(styles)(ModalRemove)

export default WrappedModal;