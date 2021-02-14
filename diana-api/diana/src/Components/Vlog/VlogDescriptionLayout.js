import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DOMPurify from 'dompurify';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    textAlign: 'center',
    marginBottom: '2em',
    paddingTop: '0.5em',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0',
    },
  },
  title: {
    font: `700 52px 'Dancing Script', cursive !important`,
    // color: '#c71585',
    [theme.breakpoints.down('xs')]: {
      font: `700 40px 'Dancing Script', cursive !important`,
    },
  },
  description: {
    fontSize: '26px',
    fontFamily: `'Josefin Sans', sans-serif !important`,
    maxWidth: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
  }
});


const vlogDescriptionLayout = (props) => {

const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
            <h1 className={classes.title}>{props.title}</h1>
            <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }} />
        </div>
    </div>
   );
  }

vlogDescriptionLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(vlogDescriptionLayout);
