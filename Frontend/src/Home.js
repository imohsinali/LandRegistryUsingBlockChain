import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import admin from './images/Admin.png'
import inspector from './images/inspector.png'
import User from './images/user.png'

const Home = () => {
  const [path,setPath]=useState('')
   

  return (
    
    <div>
      <nav className="home-nav">
      <h1>Land Registry</h1>
      <ul>
        <li>
          <Link to={'login'} onClick={()=>localStorage.setItem('path','Admin')} style={{ textDecoration: 'none' }}>
            <Button>Admin</Button>
          </Link>
        </li>
        <li>
        <Link to={'/login'} onClick={()=>localStorage.setItem('path',"Inspector")} style={{ textDecoration: 'none' }}>
            <Button>Inspector</Button>
          </Link>
        </li>
        <li>
        <Link to={'login'} onClick={()=>localStorage.setItem('path',"User")} style={{ textDecoration: 'none' }}>
            <Button>User</Button>
          </Link>
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
        <div><img src={User}/>
        <h3>User</h3>
        </div>


      </section>
    </div>
  );
};

export default Home;
