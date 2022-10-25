import Inspector from "./Inspector/Inspector";
import { useEffect, useState } from "react";
import React from 'react'
import User from "./User/User";
import Admin from "./Admin/Admin";
import admin from './images/Admin.png'
import inspector from './images/inspector.png'
import user1 from './images/user.png'
import { Button } from "@mui/material";

// import { useStateValue } from "./StateMangement/StateProvider";
const App = () => {
  // const [{ basket, user }, dispatch] = useStateValue();
  // console.log("from App", user)
let user =localStorage.getItem('path')
const [path,setpath]=useState({Inspector:false,Admin:false,User:false})
let styl=!(path.Inspector && path.Inspector && path.User)
console.log(styl)
  useEffect(() => {
    // window.location.reload();
  
  if(user=='Inspector')
  {
    setpath({Inspector:true,Admin:false,User:false})
  }
  if(user=='Admin')
  {
    setpath({Inspector:false,Admin:true,User:false})
  }if(user=='User')
  {
    setpath({Inspector:false,Admin:false,User:true})
  }
  
    
  },[]);
console.warn(path)

  return (
    <>

<div className='home'>
      <nav className="home-nav">
      <h1>Land Registry</h1>
      <ul>
        <li>
           
            <Button onClick={()=>setpath({Inspector:false,Admin:true,User:false}) } style={{ textDecoration: 'none' }} >Admin</Button>
          
        </li>
        <li>
         
            <Button onClick={()=>setpath({Inspector:true,Admin:false,User:false})} style={{ textDecoration: 'none' }}>Inspector</Button>
        </li>
        <li>
            <Button onClick={()=>setpath({Inspector:false,Admin:false,User:true})} style={{ textDecoration: 'none' }} >User</Button>
         
        </li>
      </ul>
      </nav>

      <section className="home-section">
        <div><img src={admin}/>
        <h3>Admin</h3>
        </div>
        <div><img src={inspector}/>
        <h3>Inspector</h3>
        </div>
        <div><img src={user1}/>
        <h3>User</h3>
        </div>


      </section>
    </div> 
    {
      path.Admin&& (<Admin/>)
    
    }
        {
      path.User&& (<User/>)
    
    }
        {
      path.Inspector&& (<Inspector/>)
    
    }
    <div>
      Hello
    </div>
    </>
  )
}

export default App

