import React, { useState } from "react";
import { useContext } from "react";
import { NodeContext } from "./Context";
import './Node.css'
const Node_info_3=(props)=>{
const {f01982557_stat, setnode3Handler}=useContext(NodeContext)

return f01982557_stat? (
<>
    <div className="container">
    <div className="column">{props.nodeId}</div>  
      <div className="column">{props.minerId}</div>
      <div className="column">{props.winposttime}</div>
      <div className="column">{props.date}</div>
      <div className="column1">OK</div>
    </div>
</>
    ):(
        <>
    <div className="container">
      <div className="column">{props.nodeId}</div>  
      <div className="column">{props.minerId}</div>
      <div className="column">{props.winposttime}</div>
      <div className="column">{props.date}</div>
      <div className="column2">WINPOST FAILED</div>
    </div>
        </>
    )

    
}
export default Node_info_3;