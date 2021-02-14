import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VlogDescriptionLayout from './VlogDescriptionLayout'


const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});


class Vlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vlog: {},
    };
    this.fetchData = this.fetchData.bind(this);
    this.populateAfterFetch = this.populateAfterFetch.bind(this);
  }

 
  componentDidMount() {
    this.fetchData();
  }


  fetchData(){
    let dataToUse = {};
    axios.get("http://3.90.7.248/wp-json/wp/v2/pages/?slug=cateva-cuvinte-despre-vlog").then(vlog => {
        dataToUse = vlog.data[0];
            this.setState({
            vlog: dataToUse
            });
        })
    }

  populateAfterFetch(title, content){
      if (title && content) {
        return (
        <VlogDescriptionLayout title={title.rendered} content={content.rendered}/>
        )
      }
  }

render() {
  
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      {this.populateAfterFetch(this.state.vlog.title, this.state.vlog.content)}
    </div>
   );
  }
}

Vlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vlog);
