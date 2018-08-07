import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FeaturesList from './FeaturesList';


const styles = theme =>({
    root : {
      flexGrow : 1,
    },

    grid : {
      backgroundColor : '#BBDEFB',
      padding: 5,
    },
    paper :{
      padding : theme.spacing.unit *2,
      textAlign : 'center',
      display : 'flex',
      flexWrap : 'wrap',
      minHeight : 246,
      margin: 'auto'
    },
    paperFeatures:{
      padding : theme.spacing.unit *2,
      textAlign : 'center',
      display : 'flex',
      flexWrap : 'wrap',
      minHeight : 246,
      width : '100%',
    },
    featuresList:{
      margin  : 'auto',
      display : 'inline-grid',
    },

    card : {
      minWidth : 390,
      minHeight : 112,
      backgroundColor : '#22313F',
      textAlign : 'center',
      margin : 'auto',
      marginBottom: 10,
      borderRadius : '3px',
      padding : '10px',

    },
    cardAction : {
      margin : 'auto',
      textAlign: 'center',
    },
    content :{
        minHeight : 112,
    },
    typography : {
      color : 'white',
    },
    button :{
      margin : 'auto',
      marginBottom : 0,
      backgroundColor : 'white',
      textAlign: 'center',
      '&:hover':{
        color: 'red',
        backgroundColor: 'white',
      },
    },
    link : {
      margin : 'auto',
     textDecoration: 'none'
    }

})


function Infos(props) {

  const{ classes } = props;
  const navInfo = [
    {
      title : 'See Users list',
      body : ' You can access to the user list of this crud.',
      link : '/userlist'
    },
    {
      title : 'Add Users',
      body  : 'You can add new  users to this crud',
      link  : '/adduser',
    },
    {
      title :'About',
      body  :'Read about us and this CRUD',
      link  :'/about',
    }
  ];

    return (
      <div className={classes.root}>
          <h1>Welcome</h1>
        <Grid className={classes.grid} container spacing={24} >
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} xs={12} sm={8}>
            {
              navInfo.map((item,index) =>{
                return(
                  <Card key={index} className={classes.card}>
                    <CardContent className={classes.content}>
                      <Typography className={classes.typography}  gutterBottom variant="headline" component="h2">
                       {item.title}
                      </Typography>
                      <Typography className={classes.typography} component="p">
                      {item.body}
                    </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Link className={classes.link} to={item.link}>
                        <Button variant='flat' size="large"  className={classes.button} fullwidth="true">
                          Go !
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                )
              })
            }
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6}>
            <Paper className={classes.paper} xs={12} sm={6}>
              <Typography  component="p">
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker
              </Typography>
            </Paper>
          </Grid>
        </Grid>
          <Grid container className={classes.grid} spacing={16}>
            <Paper xs={12} sm={8} className={classes.paperFeatures}>
            <FeaturesList className={classes.featuresList}/>
            </Paper>  
          </Grid>
      </div>

    );
  }


Infos.propTypes = {
  classes :  PropTypes.object.isRequired
}


export default withStyles(styles)(Infos);