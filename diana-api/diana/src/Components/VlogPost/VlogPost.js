import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './VlogPost.css';


const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: '1em auto',
		maxWidth: '1300px',
		width: '90%',
	},
	
	paper1: {
		width: '100%',
		height: '468px',
		margin: '0 auto',
		marginRight: '10px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: 'none',
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
		  height: '300px',
		  marginRight: '0px',
		  
	    },
	},
	paper2: {
		width: '100%',
		float: 'left',
		height: '490px',
		alignItems: 'center',
		boxShadow: 'none',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '450px',
		  },
		[theme.breakpoints.down('xs')]: {
		  width: '100%',
		  height: '280px',
	    },
		
	},
	subtitle: {
		textTransform: 'none',
	    font: `700 60px 'Dancing Script', cursive !important`,
		color: 'white',
		textShadow: '2px 2px #c71585 ',
	    textAlign: 'center',
		margin: 'auto',
		seflAlign: 'bottom',
		// borderBottom: '5px solid white',
		boxShadow: '20px 0px 50px white',
	    padding: '1%',
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			font: `700 40px 'Dancing Script', cursive !important`,
		  },
},

	title: {
		textTransform: 'none',
		fontFamily: `'Josefin Sans', sans-serif !important`,
		fontSize: '30px',
		color: 'white',
		textShadow: '2px 2px #c71585 ',
	    textAlign: 'center',
		margin: 'auto',
		seflAlign: 'top',
	    paddingTop: '2%',
	    cursor: 'pointer',
	    [theme.breakpoints.down('xs')]: {
		  fontSize: '25px',
		  top: '30%',
	    },
	},
});

class VlogPost extends React.Component {
	
	state = {
			display: false,
			float: null,
			bg: 'cover',
			displayWhite: true,
		};

	Show = () => {
		this.setState({display: true, float: 'right', bg: 'cover', displayWhite: false});
		if (this.state.display) { this.setState({display: false, float: null, bg: 'cover', displayWhite: true})}
		
	};


	render() {

	  const { classes, image, video, subtitle, title, color1, color2 } = this.props;

	    return (
	      <div className={classes.root}>

	             <Grid container spacing={0}>
			        
				 {this.state.displayWhite
			      	?<Grid className='animate fadeInLeft' item xs={12} sm={12} md={4}>
			        </Grid> 
			      	:null
			  		}
					<Grid item xs={12} sm={12} md={4}>
			        <Paper className={classes.paper1} style={{background: `url(${image}) no-repeat center`, backgroundSize: this.state.bg, float: this.state.float}}>
			          <Grid container spacing={0}>
					  <Grid item xs={12} className={classes.subtitle} onClick={this.Show} size="small">{subtitle}</Grid>
			          <Grid item xs={12} className={classes.title} onClick={this.Show} size="small" >{title}</Grid>
					  </Grid>
			        </Paper>
			        </Grid>

			      {this.state.display
			      	?<Grid className='animate fadeInLeft' item xs={12} sm={12} md={8}>
						 <Paper className={classes.paper2} >
						    <Paper style={{background: `linear-gradient(0deg, ${color1}, ${color2})`}}>{video}</Paper>
						 </Paper>
			        </Grid> 
			      	:null
			  		}
			     </Grid>

	      </div>
	    );
  }
}

VlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VlogPost);