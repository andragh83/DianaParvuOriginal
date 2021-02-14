import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ScrollableAnchor from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor'
import Image1 from '../Images/DianaLifestyle.jpg';
import Image2 from '../Images/DianaWorkshop2.jpg';
import Image3 from '../Images/DianaVlog2.jpg';
import Image4 from '../Images/SergiuCover.JPG';
import './GridContent.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5em 2em',
  },
  media: {
    height: 500,
    [theme.breakpoints.up('xl')]: { height: 600},
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.50),
    },
  },

  button: {
    marginBottom: '1em',
    padding: '0 1.2em',
    justifyContent: 'center',
  },

  card: {
    border: 'none',
  },

});


const GridContent =(props) => {

  const { classes, onRouteChange } = props;

  removeHash()
  
  return (
    <div className={classes.root}>
      
      <Grid container spacing={40}>
       
        <Grid item xs={12} sm={6} lg={3}>
        <ScrollableAnchor id={'aflamaimulte'}>
            <Card className={classes.card} onClick={() => onRouteChange('blog')}>
              
              <CardActionArea>
                <div className='grow'>
                  <CardMedia
                    className={classes.media}
                    image={Image1}
                    title="Background"
                  />
                  <span className="items">Blog</span>
                  <span className="items2">Hai să stăm de vorbă!</span>
                </div>
              </CardActionArea>
            
          </Card>
        </ScrollableAnchor>
      </Grid>
      
        
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card} onClick={() => onRouteChange('vlog')}>
          
              <CardActionArea>
                <div className='grow'>
                  <CardMedia
                    className={classes.media}
                    image={Image3}
                    title="Vlog"
                  />
                <span className="items">Vlog</span>
                <span className="items2">Joy cu Diana Pârvu</span>
                </div>
              </CardActionArea>
            
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card className={classes.card} onClick={() => onRouteChange('workshops')}>
            
              <CardActionArea> 
                <div className='grow'>
                  <CardMedia
                    className={classes.media}
                    image={Image2}
                    title="Workshop"
                  />
                  <span className="items">Workshops</span>
                  <span className="items2">Fă artă din discursul tău</span>
                </div> 
              </CardActionArea>
            
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card className={classes.card} onClick={() => onRouteChange('tipsAndCars')}>
            
              <CardActionArea> 
                <div className='grow'>
                  <CardMedia
                    className={classes.media}
                    image={Image4}
                    title="Workshop"
                  />
                  <span className="items">{'Tips&Cars'}</span>
                  <span className="items2">{'by Sergiu Negoţiu Piloff'}</span>
                
                </div> 
              </CardActionArea>
            
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

GridContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridContent);
