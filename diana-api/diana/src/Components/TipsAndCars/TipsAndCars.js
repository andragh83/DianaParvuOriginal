import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PostTipsAndCars from './PostTipsAndCars';
import Image from '../Images/SergiuContainer.JPG';
import './TipsAndCars.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5em 2em',
    [theme.breakpoints.down('sm')]: {
        margin: '5em -2em',
    }
  },
  container: {
    width: '90%',
    height: '200px',
    background: `linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${Image}) center center`,
    backgroundSize: 'cover',
    margin: '0 auto',
    marginBottom: '30px',
  },
  containerTitle: {
      color: '#FFF',
      fontSize: '40px',
      paddingTop: '70px',
      marginBottom: '10px',
      paddingLeft: '12rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 0px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.6)',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '50px',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    }
  },
  containerAuthor: {
    color: '#FFF',
    textShadow: '1px 1px 0px rgba(0,0,0,0.6), 1px 1px 0px rgba(0,0,0,0.6)',
    fontSize: '20px',
    paddingLeft: '15rem',
    marginTop: '0px',
    paddingTop: '10px',
    
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '2rem',
    }
  }
});


class TipsAndCars extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      posts: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.populateAfterFetch = this.populateAfterFetch.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.createMarkup = this.createMarkup.bind();
    
  }

 
  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
  }

  createMarkup(html) {
    return { __html: html };
  }

  fetchData(){
    let dataToUse =[];
    axios.get("http://3.90.7.248/wp-json/wp/v2/articles?per_page=100")
         .then(posts => {
            dataToUse = posts.data;
            this.setState({
                posts: Object.values(dataToUse)
            });
    })
  }
  
    populateAfterFetch(post, index){

        const publicationDate = (date) => {
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0');
            var yyyy = date.getFullYear();
            return (dd + '.' + mm + '.' + yyyy) 
        }
        
        const dataPublicare=publicationDate(new Date(post.date));

            if (post) {
                return (
                    <div key={index} index={index}>  
                        <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <PostTipsAndCars slug={post.slug}
                                id={post.id}
                                title={Object.values(post.title)}
                                author={'Sergiu Negoţiu Piloff'}
                                image={post.f_img_url}
                                date={dataPublicare}
                                category={''}
                                postExcerpt={post.excerpt.rendered}
                                postContent={post.content.rendered}
                            /> 
                        </Grid>
                        </Grid> 
                    </div>
                )
            } else {console.log('Eroareeee!!!')}
        
    }

    renderPosts() {
        if (this.state.posts) {
            const postsArray = this.state.posts;
            return Object.values(postsArray).map((post, index) => this.populateAfterFetch(post, index));
            } else {console.log('Could not fetch!!')}
    }
  

    render() {
    
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
             
                <div className={classes.container}>
                    <p className={classes.containerTitle}>Auto Moto Tips and Tricks</p> 
                    <div className='lineLoad'></div>
                    <p className={classes.containerAuthor}>by Sergiu Negoţiu Piloff</p>
                </div>
                {this.renderPosts()}
              
            </div>
        );
    }

}

TipsAndCars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipsAndCars);
