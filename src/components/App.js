
 
import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Counter from './Counter/Counter';
import Controller from './Controller/Controller';
import Laps from './Laps/Laps';

  class App extends Component {

    constructor(){

       super();
       this.state = {
        time:{
          min: 0,
          sec: 0,
          mili:0
        },
        laps:''  
       }  
    }

    getStart(){

     this.intervalID = setInterval(()=>{

      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;

      if(mili > 9){ mili = 0; sec = sec+1;}
      if(sec > 59){ sec = 0; min = min+1;}
      
        this.setState({
          ...this.state,
         time:{
          min,
          sec, 
          mili: mili+1
         }     
               
          })

      }, 100) 

    }

    getPause(){

    clearInterval(this.intervalID);

    }

    getReset(){
      
      this.setState({
        ...this.state,
        time:{
          min:0,
          sec:0,
          mili:0
        }
      })

    }

    getLaps(){

      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;
      let lap =min+"-"+sec+"-"+mili;
      let laps = this.state.laps + " " + lap;
      

     this.setState({
        ...this.state,
        
        laps:laps

      })

    }

    render() {
      return (
        <div className="App">
          <div className="container bg-info">
            <div className="row">
              <Title />
            </div>
            <hr></hr>
            <div className="container bg-info counterContainer">
         <Counter min = {this.state.time.min} sec =  {this.state.time.sec} mili = {this.state.time.mili}/>
            </div>
            <div className = "container">
              <Controller start = {this.getStart.bind(this)}
                          pause = {this.getPause.bind(this)}
                          reset = {this.getReset.bind(this)}
                          lap   = {this.getLaps.bind(this)}/>
            </div>
            <br></br>

         <table className="table table-bordered table-striped table-dark">

         <thead>
           <tr><th>Laps ID</th><th>Countdown Time</th></tr>
         </thead>
         <tbody>

           <Laps lapstime={this.state.laps} />
           
         </tbody>
         </table>
            <br></br>
          
          </div>          
        </div>
      );
    }
  }

export default App;