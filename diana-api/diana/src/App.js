import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Grid';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import GridContent from './Components/GridContent/GridContent';
import Navigation from './Components/Navigation/Navigation';
import Workshop from './Components/Workshop/Workshop';
import Vlog from './Components/Vlog/Vlog';
import TipsAndCars from './Components/TipsAndCars/TipsAndCars';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';

import Image from './Components/Images/DianaNobg.png';
import './App.css';

const styles = theme => ({
    paperContainer: {
        background: `#FFF`,
        height: '75vh',
        paddingTop: '50px',
        [theme.breakpoints.up('sm')]: { height: '85vh'}
    },
  jumbotron: {
    background: `url(${Image}) transparent no-repeat right`,
    height: '75vh',
    marginTop: '1%',
    marginRight: '10px', 
    backgroundSize: 'contain',
    [theme.breakpoints.up('sm')]: { height: '90vh', marginRight: '20%',},
    [theme.breakpoints.up('xl')]: {
      marginRight: '25%', 
    },
  },
  jumbotronText: {
    marginLeft: 0,
  }
});

const App = (props) => {

  useEffect(()=>{window.scrollTo(0, 0)})
      
  const [route, setRoute] = useState('home');
  
  const onRouteChange = (newRoute) => {
      setRoute(newRoute);
    }

  const { classes } = props;

    return (
      <div> 
        
        <Navigation onRouteChange={onRouteChange} />
        { route==='home' ? <div>
                              <Container className={classes.paperContainer} >
                                    <div className={classes.jumbotron}>
                                      <Jumbotron />
                                    </div>
                              </Container>

                              <GridContent onRouteChange={onRouteChange}/>
                           </div> 
                          : (
                            route === 'blog' ? <div>
                                                <Blog />
                                               </div>
                                              : (
                                                route === 'vlog' ? <div>
                                                                    <Vlog />
                                                                   </div> 
                                                                  : (
                                                                    route === 'workshops' ? <div>
                                                                                              <Workshop onRouteChange={onRouteChange}/>
                                                                                            </div>
                                                                                        : route === 'tipsAndCars' ? <div>
                                                                                                                      <TipsAndCars />
                                                                                                                    </div>
                                                                                                                  : <div>
                                                                                                                      <Contact />
                                                                                                                    </div>  
                                                                  )
                                              )

                            )

        }
                  
      <Footer />    
        
      </div>
    );
  }

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);



