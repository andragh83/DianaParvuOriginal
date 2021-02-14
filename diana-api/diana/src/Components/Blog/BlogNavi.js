import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  grow: {
    maxWidth: '80%',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #c71585',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '98%',
    },
  },
  toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // borderBottom: '1px solid #c71585',
      maxWidth: '80%',
  },
  menuButton: {
    fontFamily: `'Josefin Sans', sans-serif !important`,
    textTransform: 'none !important',
    fontSize: '1.3rem',
    color: '#c71585',
    "&:hover": {
      backgroundColor: '#fcf0f7',
    } ,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    }
  },
  title: {
    display: 'block',
    cursor: 'pointer',
    font: `35px 'Dancing Script', cursive !important`,
    paddingLeft: '5%',
    textTransform: 'inherit',
  },
  
});


const BlogNavi = props => {
    const { classes, handleCategory } = props;
    return (
      
        <div className={classes.root}>
              <div className={classes.grow}>
              <Button 
                  className={classes.menuButton}
                  onClick={() => handleCategory('', true)}
                >
                  Toate
                </Button>
                <Button 
                  className={classes.menuButton}
                  onClick={() => handleCategory('Lifestyle', false)}
                >
                  Lifestyle
                </Button>
                <Button 
                  className={classes.menuButton}
                  onClick={()=>handleCategory('Fashion', false)}
                >
                  Fashion
                </Button>
                <Button 
                  className={classes.menuButton}
                  onClick={()=>handleCategory('Hair&MakeUp', false)}
                >
                  {'Hair&MakeUp'}
                </Button>
              </div>

        </div>
      
    );
}

BlogNavi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogNavi);