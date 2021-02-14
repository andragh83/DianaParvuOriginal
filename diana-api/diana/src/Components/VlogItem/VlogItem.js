import React from 'react';
import './VlogItem.scss';

const VlogItem = props => {
    var videoSrc = "https://www.youtube.com/embed/" + 
        props.video + "?autoplay=" + 
        props.autoplay + "&rel=" + 
        props.rel + "&modestbranding=" +
        props.modest;
    return (
      <div className="vlogContainer">
        <iframe title="vlogPost" className="vlogPlayer" type="text/html" width="100%" height="100%"
  src={videoSrc}
  frameBorder="0"/>
      </div>
    );
}

export default VlogItem;