import React, {useState,  createContext} from "react"

export const NodeContext=createContext({
    
    f01624021_stat:false,
    setnode1Handler:(f01624021_stat)=>{},
    
    f01918123_stat:false,
    setnode2Handler:(f01918123_stat)=>{}, 
    
    f01982557_stat:false,
    setnode3Handler:(f01982557_stat)=>{},
})
const NodeContextProvider=({
    children
})=>{
    // we set the email to be the global variable so that it can be used to track the 
// information of that particular user who uses their email to login . 
// so that we will send the email to the  endpoints url 
   
    const [f01624021_stat, setNode1]=useState();
   
    const [f01918123_stat, setNode2]=useState();

    const [f01982557_stat,setNode3]=useState();
    
    const setnode1Handler=(f01624021_stat)=>setNode1(f01624021_stat);
    const setnode2Handler=(f01918123_stat)=>setNode2(f01918123_stat);
    const setnode3Handler=(f01982557_stat)=>setNode3(f01982557_stat);
   
    
    return (
    <NodeContext.Provider value={{f01624021_stat,setnode1Handler,f01918123_stat,setnode2Handler,f01982557_stat,setnode3Handler
 }}>
        {children}
    </NodeContext.Provider>
);
};
export default NodeContextProvider