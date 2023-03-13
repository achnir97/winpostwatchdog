import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header_1 from './Header';
import Node_info from './Node'
import Node_info_1 from './Node_1';
import Node_info_2 from './Node_2';
import Node_info_3 from './Node_3';

import './App.css'

import { NodeContext } from './Context';


const apiEndpoint ="https://api.node.glif.io/rpc/v0"
const minerId = 'f01624021';
const sectorNumber = '1';

function App() {
  const [date, setDate] = useState(new Date());
  const [messageId, setMessageId] = useState(null);
  const {status, setStatus}=useState(true)
  const{f01624021_stat, setnode1Handler,f01918123_stat, setnode2Handler, f01982557_stat,setnode3Handler}=useContext(NodeContext)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 24 * 60 * 60 * 1000); // update once per day
    console.log(date)
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setnode1Handler(true)
    setnode2Handler(true)
    setnode3Handler(true)
    
    async function getMessageId() {
      const responseNonce = await axios.post(apiEndpoint, {
        jsonrpc: '2.0',
        id: 1,
        method: 'Filecoin.MpoolGetNonce',
        params: [minerId]
      });
      const nonce = responseNonce.data.result;

      const responsePending = await axios.post(apiEndpoint, {
        jsonrpc: '2.0',
        id: 1,
        method: 'Filecoin.MpoolPending',
        params: []
      });
      const pendingMessages = responsePending.data.result;

      const message = pendingMessages.find(m => m.Message.To === minerId && m.Message.Method === 6 && m.Message.Params[0].SectorNumber == sectorNumber && m.Message.Nonce == nonce);
    
      if (message) {
        setMessageId(message.Cid['/']);
      }
    }

    getMessageId();
  }, []);

  return (
   
   <div className='app'>
    
    <Header_1/>
    <Node_info minerId="MINER ID" winposttime="WINPOST TIME" date="DATE"  winpoststatus= "WIN POST STATUS" />
    <Node_info_1 minerId="f01624021" winposttime="9.00AM ~ 11.00AM" date={date.toDateString()} />
    <Node_info_2 minerId="f01918123" winposttime="16.00PM ~ 18.00PM" date={date.toDateString()} />
    <Node_info_3 minerId="f01982557" winposttime="10:45PM ~ 12:00PM " date={date.toDateString()} />
    </div>   
  );
}

export default App;

 