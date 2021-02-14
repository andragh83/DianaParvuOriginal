import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1em',
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '2em',
      marginRight: '1em',
      paddingBottom: '6px',
    },
  },
  margin: {
    margin: '1em 0',
  },
  cssLabel: {
    color: '#e5e5e5',
    '&$cssFocused': {
      color: amber[500],
    },
  },
  cssFocused: {},
  
  cssOutlinedInput: {
    color: 'white',
    '&$cssFocused $notchedOutline': {
      borderColor: amber[500],
    },
  },
  notchedOutline: {},
  footer1: {
    textAlign: 'left',
    padding: '0em 1em',
    font: `700 30px 'Dancing Script', cursive !important`,
  },
  footer2: {
    color: '#c71585',
    textAlign: 'center',
    width: '75%',
    paddingTop: '1em',
    margin: '0 auto',
    font: `20px 'Josefin Sans', sans-serif !important`,
  },
});

const Footer =(props)=> {
  const { classes } = props;

  return (
    <AppBar position="relative" style={{ background: '#FFF', boxShadow: 'none', marginTop: '-50px'}}>
          <div className={classes.footer2}>
          2019 Toate drepturile rezervate
              <IconButton color="inherit" href="https://www.facebook.com/dianaparvu85/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
              <IconButton color="inherit"  href="https://www.instagram.com/dianaparvu/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
              <IconButton color="inherit" href="https://www.youtube.com/channel/UCrZix_xgK124SQbAUWsy14g" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </IconButton>
          </div>
    </AppBar>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);