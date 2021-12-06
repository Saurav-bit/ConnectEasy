import { Avatar } from '@mui/material'
import React from 'react'
import "./SideBarChat.css"

function SideBarChat(props) {
    // console.log(props)
    // console.log(props.num)
    return (
        <div className={`sidebarChat`}>
            <Avatar />
            <div className='sidebarChat__info'>

                <h2>{props.naam}</h2>
                {/* <h2>This is name</h2> */}
                <p>
                 Participant 
                 <span className='number_display'>
                        {props.num+1}
                     </span> 
                   </p>

            </div>
            
        </div>
    )
}

export default SideBarChat
