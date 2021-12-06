import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Avatar from "@mui/material/Avatar";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { SearchOutlined } from "@mui/icons-material";
import SideBarChat from "./SideBarChat";
import LoginForm from "../../LoginForm";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const clientId = "122636136649-a0djmu12vanl0mh0q28f1q1d3dj380ir.apps.googleusercontent.com";

function SideBar({messages,login,logout,showNewLogin,showNewLogout,name}) {
  // console.log(login);
  // console.log(logout);

  const [newLogin, setnewLogin] = useState(login);
  const [newLogout, setnewLogout] = useState(logout);
  // console.log(messages);


const key = 'name';

const room_name = [...new Map(messages.map(item =>
  [item[key], item])).values()];


  const [number,setNumber]= useState(1);
  const onSignoutSuccess=()=>{
    alert("You have been logged out successfully");
    console.clear();
    setnewLogin(true);
    setnewLogout(false);








    // console.log("done");


  }
  const handleClick=(e)=>{
    e.preventDefault();
    // console.log("clicked")
    // setnewLogin(true);
    // setnewLogout(false)

   
     
      // <App handlelogin={showloginButton} handlelogout={showlogoutButton}/>:null
          
          // <App/>:null

    
    
    // console.log(newLogin);
    // console.log(newLogout);



  }

  useEffect(()=>{
    showNewLogin(newLogin);

  },[newLogin])


  useEffect(()=>{
    showNewLogout(newLogout);

  },[newLogout])







 
  // const handleClick=()=>{
  //   handleLoginClick();
   
  // }
// console.log(room_name);
//  console.log(room_name.length)
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header_left">
        <Avatar></Avatar>
        <p className="side_name_header">{name}</p>
        </div>
        
       
        <div className="sidebar__headerRight">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
          {/* <GoogleLogout
         
              className="logtclss"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
          > */}
            
          {/* </GoogleLogout> */}
          <LogoutIcon onClick={onSignoutSuccess}/>
          {/* <LoginIcon  /> */}

           
            
         
         
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new Chat" type="text"/>
        </div>
      </div>

      
      <div className="sidebar__chats">

        {room_name.map((name)=>{
          return (
            
            <SideBarChat naam={name.name} num={room_name.findIndex((obj)=>{
              return(obj.name===name.name)

            })} />
          )

        })}

        {/* <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/>
        <SideBarChat/> */}

      </div>
    </div>
  );
}

export default SideBar;
