import React, {Component} from 'react';

import './Title.css'; 

class Title extends Component{

  constructor(props){
  	super(props);
  	this.state = {
  	Title:"Wellcome! Click me to edit",
  	isEditable: false
    }
  }

  enableTitleEditor(){
    this.setState ({
     ...this.state,
     isEditable:true
     }
    )
  }

  TitleEditor(event){  
    this.setState({
     ...this.state,
     Title: event.target.value
     }
    )
  }

  KeyChecker(event){
    this.setState({
     	...this.state,
     	isEditable:false
     	}
    )
  }

  render(){

    let output = null;

    if(this.state.isEditable){
      output = (
      <div>
       <input type="text"
         value={this.state.Title} 
         onChange={(event) => this.TitleEditor(event)}
         onBlur={event => this.KeyChecker(event)}
         autoFocus={true}/>
       </div>
      )
  
    } else {
	   output = (
		   <div>
		   <h2 onClick={this.enableTitleEditor.bind(this)}> {this.state.Title} </h2> 
		   <span className="ml-auto" onClick={this.enableTitleEditor.bind(this)}></span>
		   </div>
		   )
	    }

			return(
				<div className="title">
				{output}
			  </div>
				)
			}
		}

export default Title;