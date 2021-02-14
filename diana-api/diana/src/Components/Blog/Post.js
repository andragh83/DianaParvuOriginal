import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DOMPurify from 'dompurify';
import './Post.css'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 400,
    backgroundSize: 'contain',
    background: 'center no-repeat',
    borderRadius: '5px',
    border: 'none',
    
  },
  card: {
    border: 'none',
    boxShadow: 'none',
  },
  postTitle: {
    textAlign: 'center',
    textDecoration: 'none',
    font: `700 52px 'Dancing Script', cursive !important`,
    [theme.breakpoints.down('xs')]: {
		  fontSize: '36px !important',
      },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      margin: '30px auto',
	    },
    // color: '#c71585',
  },
  publicat: {
    margin: '20px auto',
    textAlign: 'center',
  },
  cat: {
      fontWeight: '700',
      color: '#c71585',
      cursor: 'pointer',
  },
  buttonDiv: {
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '50px', 
    [theme.breakpoints.up('sm')]: {
		  marginTop: '-50px',
	    },

  },
  button: {
    fontSize: '26px', 
    fontWeight: 'normal',
    textTransform: 'inherit', 
    borderBottom: '1px solid #000', 
    paddingLeft: '20px',
    paddingRight: '20px',
    [theme.breakpoints.up('xs')]: {
      "&:hover": {
        color: '#c71585',
        backgroundColor: '#FFF',
        borderBottom: '1px solid #c71585', 
      } 
    },
  }
});


const Post = (props) => {
  
  const [readMoreButton, setReadMoreButton] = useState('Citeşte mai multe...');
  const [displayContent, setDisplayContent] = useState('none');
  const [displayExcerpt, setDisplayExcerpt] = useState(true);

  const { classes, image, title, author, date, category, postExcerpt, postContent, handleCategory } = props;

  const handleContent = () => {
        setDisplayContent(true);
        setDisplayExcerpt('none');
        setReadMoreButton('Intoarce-te la preview');
        if (displayContent && displayExcerpt==='none') { 
          setDisplayContent('none');
          setDisplayExcerpt(true);
          setReadMoreButton('Citeşte mai multe...');
        }
      }

  return (
    <div className={classes.root}>
            <h1 className={classes.postTitle}>{title}</h1>
            <div className={classes.publicat}>Publicat de {author} pe {date} in <span className={classes.cat} onClick={() => handleCategory(category, false)}>{category}</span></div>
            <Card className={classes.card} >
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Background"
                  />
            </Card>
            <div style={{display: displayExcerpt}} className='postari' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postExcerpt) }} />
            <div style={{display: displayContent}} className='postari' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postContent)}} />
            
            <div className={classes.buttonDiv}>
                <Button className={classes.button} onClick={handleContent}>{readMoreButton}</Button> 
            </div>
      
        
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
