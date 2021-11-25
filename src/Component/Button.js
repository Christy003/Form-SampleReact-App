// import { useState } from "react";
// function Button(props){
//     const [condition,setCondition]=useState("not submitted!");
        
//     return(
//         <> 
//         <h3> The form is {condition}</h3>
//         <button type="button" className="button" onClick={()=>setCondition("submitted.")}>{props.value1}</button>
        
//         </>
//     );
// }
// export default Button;
import React from 'react';


class Button extends React.Component{
    constructor(props){
     super(props);
      this.state = {condition:" not submitted"};
    }
   set=()=>{ this.setState({condition:" submitted."})};
    render(){
        return(
        <> 
        <h3>The form is{this.state.condition}</h3>
        <button className="button" onClick={this.set } > {this.props.value12}</button>
        </>
        );  
    }
}

export default Button;