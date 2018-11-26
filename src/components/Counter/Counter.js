import React from 'react';
import Segment from './Segment/Segment';
import './Counter.css';

class Counter extends React.Component{

 

 render(){

  
   return(
       <React.Fragment>
          <div className="d-flex text-center row" style={{fontSize:180}}>
           <Segment color="red" value={this.props.min}/>.       
           <Segment color="blue" value={this.props.sec}/>.       
           <Segment color="green" value={this.props.mili}/>             
          </div>
       </React.Fragment>
       )

   	}
}

export default Counter;


