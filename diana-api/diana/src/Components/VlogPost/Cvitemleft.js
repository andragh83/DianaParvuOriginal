import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Cvitemleft.css'


const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: '1em',
	},
	
	paper1: {
		background: 'no-repeat center cente',
		backgroundSize: 'cover',
		width: '70%',
		height: '300px',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
	    },
	},
	paper2: {
		width: '70%',
		float: 'left',
		height: '300px',
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
	    },
		
	},
	period: {
		textTransform: 'none',
	    font: `400 60px/1.5 'Pacifico', Helvetica, sans-serif !important`,
		color: 'white',
		textShadow: '3px 3px 0px rgba(0,0,0,0.6), 3px 3px 0px rgba(0,0,0,0.6) !important',
	    textAlign: 'center',
	    margin: 'auto',
	    borderBottom: '5px solid white',
	    width: '80%',
	    top: '40%',
	  	left: '50%',
	  	transform: 'translate(-50%, -50%)',
	    cursor: 'pointer',
},

	title: {
		textTransform: 'none',
		fontSize: '30px',
		color: 'white',
		textShadow: '3px 3px 0px rgba(0,0,0,0.6), 3px 3px 0px rgba(0,0,0,0.6) !important',
	    textAlign: 'center',
	    margin: 'auto',
	    width: '80%',
	    top: '40%',
	  	left: '50%',
	  	transform: 'translate(-50%, -50%)',
	    cursor: 'pointer',
	    [theme.breakpoints.down('xs')]: {
		  fontSize: '20px',
		  top: '35%',
	    },
	},

exp: {
	paddingTop: '1em',
	paddingLeft: '1em',
	height: '283px',
}
});

class Cvitemleft extends React.Component {
	
	state = {
			display: false,
			md: 12,
			float: null,
		};

	Show = () => {
		this.setState({display: true, md: 6, float: 'right'});
		if (this.state.display) { this.setState({display: false, md: 12, float: null})}
		
	};


	render() {

	  const { classes, image, exp, period, title, color1, color2 } = this.props;

	    return (
	      <div className={classes.root}>

	             <Grid container spacing={0}>
			        
			        <Grid item xs={12} sm={12} md={this.state.md}>
			        <Paper className={classes.paper1} style={{background: `linear-gradient(0deg, #000, hsla(0, 0%, 100%, 0), #000), url(${image}), center no-repeat`, backgroundSize: 'cover', float: this.state.float}}>
			          <Button className={classes.period} onClick={this.Show} size="small">{period}</Button>
			          <Button className={classes.title} onClick={this.Show} size="small" >{title}</Button>
			        </Paper>
			        </Grid>

			      {this.state.display
			      	?<Grid className='animate fadeInLeft' item xs={12} sm={12} md={6}>
						 <Paper className={classes.paper2} >
						    <Paper className={classes.exp} style={{background: `linear-gradient(0deg, ${color1}, ${color2})`}}>{exp}</Paper>
						 </Paper>
			        </Grid> 
			      	:null
			  		}
			     </Grid>

	      </div>
	    );
  }
}

Cvitemleft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cvitemleft);