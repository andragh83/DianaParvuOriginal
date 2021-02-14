import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from '../Images/DianaWorkshop.jpg';
import './Workshop.css';
import CheckIcon from '@material-ui/icons/Check';


const styles = theme => ({
  root: {
    margin: '5% auto',
    [theme.breakpoints.down('sm')]: {
      margin: '12% auto',
    },
  },
  paper1: {
    padding: theme.spacing.unit * 2,
    background: `url(${Image})`,
    backgroundSize: 'cover',
    height: '400px',
    boxShadow: '0px 5px 5px 0px rgba(255,255,255,0.2), 0px 2px 2px 0px rgba(255,255,255,0.14), 0px 3px 1px -2px rgba(255,255,255,0.12)',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      marginTop: 10,
      paddingLeft: '3em',
      position: 'relative',
      zIndex: '1',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '500px',
      height: '350px',
      marginTop: 20,
      marginLeft: '20%',
      position: 'relative',
      zIndex: '1',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '30%',
    }
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    background: '#c71585',
    color: 'white',
    fontSize: 26,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit,
      paddingLeft: '5em',
      paddingRight: '1em',
      marginLeft: 30,
      marginTop: '3em',
      width: '50%',
      position: 'relative',
      zIndex: '0',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '5em',
      paddingRight: '2em',
      marginLeft: '-15%',
      marginTop: '3em',
      width: '70%',
      position: 'relative',
      zIndex: '0',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '-20%',
      marginTop: '5em',
    }
  },
  paper3: {
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    fontSize: 26,
    [theme.breakpoints.up('md')]: {
      paddingLeft: '2em',
      paddingTop: '5em',
      marginTop: '-4em',
      position: 'relative',
      zIndex: '-1',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '2em',
      paddingTop: '5em',
      position: 'relative',
      zIndex: '-1',
      margin: 'auto 10em',
      marginTop: '-4em',
    },
  },

  paper4: {
    padding: '1em 1em',
    color: '#fff',
    background: '#c71585',
    width: '80%',
    height: '80px',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '26px',
    marginBottom: theme.spacing.unit, 
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing.unit * 4, 
      marginLeft: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    }
  },
  paper5: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    boxShadow: 'none',
    font: `700 60px 'Dancing Script', cursive !important`,
    [theme.breakpoints.down('xs')]: {
      font: `700 40px 'Dancing Script', cursive !important`,
    }
  },
  paper6: {
    padding: '3em',
    margin: '0 auto',
  },
  paper7: {
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    boxShadow: 'none',
    font: `700 60px 'Dancing Script', cursive !important`,
    paddingBottom: '1em',
    [theme.breakpoints.down('xs')]: {
      font: `700 40px 'Dancing Script', cursive !important`,
    }
    
  },
  highlight1: {
    font: `700 60px 'Dancing Script', cursive !important`,
    [theme.breakpoints.down('xs')]: {
      font: `700 40px 'Dancing Script', cursive !important`,
    }
  },
  button: {
    textTransform: 'inherit',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: '#c71585',
    marginBottom: '3em',
    fontSize: '30px',
    maxWidth: '30%',
    fontFamily: 'inherit',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80%',
      fontSize: '25px',
    }
  },
});

const Workshop =(props) => {

  useEffect(()=>{window.scrollTo(0, 0)})

  const { classes, onRouteChange } = props;

  return (
    <div className={classes.root}>
      
      <Grid container spacing={0} className='animate fadeIn'>
        
        <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.paper1}>
        </Paper>
        </Grid>

        <Grid item sm={12} md={6}>
        <Paper className={classes.paper2}>
          <p>Sunt oameni pentru care vorbitul în public vine natural. Se distrează când fac asta.</p>
          <p>Și sunt oameni îngroziți de vorbitul in public. Este normal.</p>
          <p className={classes.highlight1}>Toți suntem diferiți.</p>
        </Paper>
        </Grid>

        <Grid item sm={12} md={12}>
        <Paper className={classes.paper3}>
          <p>Studiile arată că frica de a vorbi în public bate frica de moarte.</p> 
          <p className={classes.highlight1}>Dar credeți-mă, se tratează!</p>
          <p>În primul rând toată lumea trebuie să știe că aceasta frică este absolut normală.</p>
          <p>In opt ani de televiziune am învățat că ORICINE poate să-și 'trateze' teama de a vorbi în public sau în fața camerei. Parte din job-ul meu era să intervievez persoane din diverse domenii. Am văzut adevărați specialiști din diferite domenii care, în fața camerei, fie rămâneau fără voce, fie se blocau și nu mai știau despre ce trebuie să vorbească.</p>
          <p>Dar, învățând-i câteva tehnici și o serie de reguli de aur, interviurile au ieșit excelent.</p>
          <p>După ceva timp, oameni dintre cei pe care i-am intervievat și care înghețau pur și simplu la ideea de a vorbi in fața camerei, deci în fata a milioane de oameni, m-au sunat pentru a-mi mulțumi.</p>
          <p>De ce?</p>
          <p>Pentru că ceea ce i-am învățat, nu numai că i-a ajutat să ducă la capăt interviul dar i-a ajutat să-și depășească teama de a vorbi în public, de a susține prezentări, discursuri și așa mai departe.</p>
        </Paper>
        </Grid>
         <Grid item sm={12} md={12}>
            <Paper className={classes.paper5}>
            Așa ca iți propun un workshop în care:
            </Paper>
          </Grid>
      </Grid>

    
        <Grid className={classes.paper6} container spacing={24}>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  <div>Să-ți arăt de unde vine frica de a vorbi în public.</div>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să te învăț tehnici care să ne ajute sa gestionăm frica.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să-ți arat cum sa te pregătești pentru un discurs
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să-ti arăt cum să redactezi un discurs.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să te învăț tehnici prin care să captăm atenția
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să-ți arăt cum să-ți prezinți ideile într-un mod cât mai atractiv
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să te pregătesc pentru momente imprevizibile.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să te învăț cum să ieși dintr-o situație tensionată.
                  </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Paper className={classes.paper4}>
                  <CheckIcon style={{ fontSize: 80, color: '#fff', paddingRight: '10px' }}/>
                  Să exersăm pentru a reuși un discurs perfect.
                  </Paper>
                </Grid>
              </Grid>
       
          <Paper className={classes.paper7}>
          Sună interesant?
          </Paper>

          
          <div style={{textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button className={classes.button} onClick={()=>onRouteChange('contact')}>
            Hai să stăm de vorbă!
            </Button>
          </div>
          
    </div>
  );
}

Workshop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
