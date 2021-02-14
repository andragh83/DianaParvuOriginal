import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import BlogNavi from './BlogNavi';
import Post from './Post';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5em 2em',
  },
});


class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      menuCategory: '',
      showAll: true,
    };
    this.fetchData = this.fetchData.bind(this);
    this.populateAfterFetch = this.populateAfterFetch.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.createMarkup = this.createMarkup.bind();
    this.handleCategory = this.handleCategory.bind(this);
    
  }

 
  componentDidMount() {
    this.fetchData();
    window.scrollTo(0, 0);
  }

  createMarkup(html) {
    return { __html: html };
  }

  handleCategory(category, showAll){
    this.setState({menuCategory: category, showAll: showAll})
  }

  fetchData(){
    let dataToUse =[];
    axios.get("http://3.90.7.248/wp-json/wp/v2/posts?per_page=100").then(posts => {
        dataToUse = posts.data;
        this.setState({
          posts: Object.values(dataToUse)
          });
        }).then(posts => {
          dataToUse.map((item, index) => {
            let categoriesLink = `http://3.90.7.248/wp-json/wp/v2/categories?post=`+ item.id.toString();
            axios.get(categoriesLink).then(category => {
             dataToUse[index].category = category.data[0].name;
              this.setState({
                posts: Object.values(dataToUse)
                });
            }); 
            return dataToUse;  
        }
        )}
      )}
  
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
          this.state.showAll 
          ? <div key={index} index={index}>  
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Post slug={post.slug}
                        id={post.id}
                        title={Object.values(post.title)}
                        author={'Diana Pârvu'}
                        image={post.imagine_postare}
                        date={dataPublicare}
                        category={post.category}
                        postExcerpt={post.excerpt.rendered}
                        postContent={post.content.rendered}
                        handleCategory = {this.handleCategory}
                    />  
                </Grid>
              </Grid> 
            </div>
            : (this.state.menuCategory === post.category ? 
              <div key={index} index={index}>  
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Post slug={post.slug}
                          id={post.id}
                          title={Object.values(post.title)}
                          author={'Diana Pârvu'}
                          image={post.imagine_postare}
                          date={dataPublicare}
                          category={post.category}
                          postExcerpt={post.excerpt.rendered}
                          postContent={post.content.rendered}
                          handleCategory = {this.handleCategory}
                      /> 
                  </Grid>
                  <div className={styles.comments}>
                    
                  </div>
                </Grid> 

            </div> : null)
  
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
      
        <BlogNavi handleCategory={this.handleCategory}/>
        {this.renderPosts()}
      
    </div>
   );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
