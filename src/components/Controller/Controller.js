
import React from 'react';

class Controller extends React.Component {

    constructor(props){
        super(props);
           this.state = {
             start:true,
             pause:false,
             lap:false,
             reset:false   
           }
    }
            
    startController(){
        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true
        })

       this.props.start();  
    }

    pauseController(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            reset:true
        })

       this.props.pause();
    }

    resetController(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:false
        })

        this.props.reset();
    }

    lapController(){

        this.props.lap();
    }

    getController() {

        let output = null;

        if (this.state.start && !this.state.reset) {
            output = (
              <React.Fragment>
              <button className = "btn btn-sm btn-success col"
                      onClick={this.startController.bind(this)} > Start < /button>
              </React.Fragment>
            )
            
        } else if (this.state.pause) {
            output = ( 
              <React.Fragment>
              <button className = "btn btn-sm btn-primary col"
                      onClick = {this.pauseController.bind(this)} > Pause < /button>
              <button className = "btn btn-sm btn-warning col"
                      onClick = {this.lapController.bind(this)} > Lap < /button>
              </React.Fragment>
            )

        } else if (this.state.start && this.state.reset) {
            output = (      
              <React.Fragment>      
              <button className = "btn btn-sm btn-success col"
                      onClick = {this.startController.bind(this)} > Resume < /button>
              <button className = "btn btn-sm btn-danger col"
                      onClick = {this.resetController.bind(this)} > Reset < /button>
              </React.Fragment>
            )
        } 

        return output;
    }

    render() {
        return (
            <div className = "row">
            {this.getController()}
            </div>
        )
    }
}

export default Controller;

