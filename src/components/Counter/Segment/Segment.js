import React from 'react';
import './Segment.css';


  const Segment = (props) => {

  	return ( 

         <div className="segmentContainer col" style={ {color:props.color} }>


      { props.value < 10 ? `0${props.value}` : props.value}

        
          </div>

  		)
  }

export default Segment;

 