import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Jumbotron.css';

const styles = theme => ({
  
  card: {
    maxWidth: 600,
    background: 'transparent',
    textAlign: 'justify',
    boxShadow: 'none',
    // paddingBottom: '2em',
    color: '#c71585',
    textShadow: '2px 2px #FFF ',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      marginBottom: '5em',
      paddingBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      color: '#FFF',
      textShadow: '2px 2px #c71585 ',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '15%'
    },
  },
  description: {
    fontSize: '1.7rem',
    maxWidth: '100%',
    marginTop: '-40px',
    textAlign: 'left',
    lineHeight: '1.2em',
    padding: '10px',
    paddingLeft: '30px',
    fontFamily: `'Josefin Sans', sans-serif !important`,
    color: '#c71585',
    textShadow: '2px 2px #FFF ',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      maxWidth: '65%',
    },
    [theme.breakpoints.down('xs')]: {
      color: '#FFF',
      textShadow: '2px 2px #c71585',
    },
  },
  button: {
    fontSize: '1.6rem',
    textTransform: 'none !important',
    maxWidth: '80%',
    marginTop: '20px',
    background: 'rgba(255,255,255,0.1)',
    textAlign: 'center',
    padding: '10px 20px',
    borderRadius: '15px',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    fontFamily: `'Josefin Sans', sans-serif !important`,
    color: '#c71585',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
      fontWeight: '700',
      maxWidth: '70%',
      background: 'rgba(255,255,255,0.8)',
      color: '#c71585',
      textShadow: 'none',
    },
  },
  sunt: {
    fontSize: '50px',
    color: '#c71585',
    fontFamily: `'Josefin Sans', sans-serif !important`,
    [theme.breakpoints.down('xs')]: {
      fontSize: '35px',
      color: '#FFF',
      textShadow: '2px 2px #c71585',
    },
  }
});

const Jumbotron =(props)=> {
  const { classes } = props;

  return (
    <div className="container">
      <Card className={classes.card}>
        <CardContent>
        <h1 className='animate fadeIn one'>Diana Pârvu</h1>
          <div className={classes.description}>
            <div className='animate fadeIn two'>TV host</div>
            <div className='animate fadeIn three'>Jurnalist</div>
            <div className='animate fadeIn four'>Public Speaking Coach</div>
            <div className='animate fadeIn five'>{'Fashion & Lifestyle Vlogger'}</div>
          </div>
          <div className='animate fadeIn six'>
          <Button className={classes.button} href="#aflamaimulte">
            Află mai  multe
          </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);