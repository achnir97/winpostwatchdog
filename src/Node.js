import React, { useState } from "react";
import './Node.css'
const Node_info=(props)=>{
   return (
<>
    <div className="container">
      <div className="column">{props.node_Id}</div>
      <div className="column">{props.minerId}</div>
      <div className="column">{props.winposttime}</div>
      <div className="column"> {props.date}</div>
      <div className="column"> {props.winpoststatus}</div>    
    </div>
</>
    )
}
export default Node_info;