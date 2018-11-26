import React from 'react';
import './Laps.css';


class Laps extends React.Component{

    constructor(props){
      super(props);
    
    }
    
    render(){

       let date = new Date();
       let moment = date.toLocaleTimeString();
       let string = this.props.lapstime;
       let array = string.split(' ');


       let table = array.map(mapme);

       function mapme(value, index, array){

        if(index==0){

          return null;
         } else {

        return <tr><td>{index}</td><td>{value}</td></tr>;

         }

       }



       return(
       	<React.Fragment>
        
         {table}

       	</React.Fragment>
       )

      }

    }

  
export default Laps;


/*    let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;
      let date = new Date();

   
     this.setState({
        ...this.state,
        laps:{
          min, sec, mili,
          id:this.state.laps.id+1
        },
       
        countdown: min+' min '+sec+'.'+mili+' sec',
        rtime: date.toLocaleTimeString()

      }) */