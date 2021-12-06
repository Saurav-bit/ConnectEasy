import React, { useState } from 'react';
import "./login.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import App from './App';
import { Box, Button, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const clientId = "122636136649-a0djmu12vanl0mh0q28f1q1d3dj380ir.apps.googleusercontent.com";

function Login() {


    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [name, setname] = useState("")
    // let name="You";
    const onLoginSuccess = () => {
        //  let newname=res.profileObj.givenName;
        // console.log(name);
        // setname(newname)
        
        // console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    console.log(name);

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

     const handleLogn=(val)=>{
         setShowloginButton(val);
         setShowlogoutButton(!val);

     }
     const handleLogt=(val)=>{
        // console.log(val);
     }



     const [newname, setnewname] = useState("")
      const handleName=(e)=>{
          console.log("click")
          e.preventDefault();
        //   localStorage.setItem("name",newname)
        setname(newname)
          onLoginSuccess();
          setnewname("")



      }
  

    return (
        <div>
            
         


            { showloginButton ?
            <div>
                <div>
                <ul className="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>

                </div>
                {/* <GoogleLogin
                className='g-signin'
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> */}
               
            
            
                
                <div className="wrapper">
	        <div className="container">
                <div className='container_items'>
                <h1>Welcome</h1>
                <div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" value={newname} onChange={(e)=>{
            setnewname(e.target.value)

        }}/>
                </Box>
                <Button variant="contained" size="medium" onClick={handleName} className='login-button' style={{margin:"10px auto"}}>
         Let's Connect
        </Button>
                </div>
                </div>
		        
                

		
	        </div>
            
                
	
	
</div>
           
            
            </div>
 
               : null}

            { showlogoutButton ?
            <App handlelogin={showloginButton} handlelogout={showlogoutButton} login={handleLogn} logout={handleLogt} name={name}/>:null
                // <GoogleLogout
                //     clientId={clientId}
                //     buttonText="Sign Out"
                //     onLogoutSuccess={onSignoutSuccess}
                // >
                // </GoogleLogout> : null
                // // <App/>:null

            }
        </div>
    );
}
export default Login;