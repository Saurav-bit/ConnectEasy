import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Components/Main/Chat";
import SideBar from "./Components/SideBar/SideBar";
import Pusher from "pusher-js";
import axios from "./axios.js"
import LoginForm from "./LoginForm";
import Logout from "./Logout";
function App(props) {

  //      const messages_new=[];

  const [messages,setMessages]=useState([])

  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>{
      setMessages(response.data);
      // console.log(response)

    });


  },[])

  useEffect(()=>{
    const pusher = new Pusher('b5904c1410ec49eb5a9f', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));

      setMessages([...messages,data])
    });
return ()=>{
channel.unbind_all();
  channel.unsubscribe();
}; 


  },[messages])

  //  console.log(messages)
   const [showlogoutButton, setShowlogoutButton] = useState(props.handlelogout);
   const [showloginButton, setShowloginButton] = useState(props.handlelogin);
 //   const onSignoutSuccess = () => {
 //     alert("You have been logged out successfully");
 //     console.clear();
 //     setShowloginButton(true);
 //     setShowlogoutButton(false);
 // };
 
 const setlogin=(val)=>{
  props.login(val)
 
 }
 const setlogout=(val)=>{
   props.logout(val)
 
 }

 const setNewLogin=(param)=>{
  //  console.log(param)
  props.login(param);

 }

 const setNewLogout=(param)=>{
  // console.log(param)
  props.logout(param);

 }


  return (
    



    <div className="app">
     
      <div className="app_body">
        <SideBar messages={messages} login={showloginButton} logout={showlogoutButton} showNewLogin={setNewLogin} showNewLogout={setNewLogout} name={props.name}/>
        {/* <LoginForm isShowLogin={isShowLogin} /> */}
        <Chat messages={messages} name={props.name}/>
       
        
      </div>
      {/* <Logout 
       login={showloginButton} logout={showlogoutButton} handlelogout={setlogout} handlelogin={setlogin}/> */}
    </div>
    
  );
}

export default App;
