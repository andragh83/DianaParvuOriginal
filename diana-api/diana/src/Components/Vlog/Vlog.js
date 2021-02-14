import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VlogPost from '../VlogPost/VlogPost';
import VlogItem from '../VlogItem/VlogItem';
import VlogDescription from './VlogDescription';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5em 2em',
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
    fontSize: '1.2em',
    maxWidth: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
  }
});


class Vlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vlogs: [],
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
    axios.get("http://3.90.7.248/wp-json/wp/v2/vlogs?per_page=100").then(vlogs => {
        dataToUse = vlogs.data;
            this.setState({
            vlogs: Object.values(dataToUse)
            });
        })
    }

  populateAfterFetch(vlog, index){
      const videoProp = vlog.meta.vlog_link.toString().substr(32,100);
      const video = <VlogItem video={videoProp} autoplay="0" rel="0" modest="1"/>
      const image = vlog.fimg_url;
      const title = Object.values(vlog.title);
      const subtitlu = vlog.meta.subtitlu;

      if (vlog) {
        return (
        <div key={index} index={index}>  
            <VlogPost image={image} video={video} subtitle={subtitlu} title={title} />
        </div> 
        )
      } else {console.log('Eroareeee!!!')}
  }

  renderPosts() {
    if (this.state.vlogs) {
        const vlogsArray = Object.values(this.state.vlogs);
        return Object.values(vlogsArray).map((vlog, index) => this.populateAfterFetch(vlog, index));
      } else {console.log('Could not fetch!!')}
  }
  

render() {
  
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      
        <VlogDescription />
        {this.renderPosts()}
      
    </div>
   );
  }
}

Vlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vlog);
