import React from "react";
import { Link } from "react-router-dom";
import admin from './images/Admin.png'
import inspector from './images/inspector.png'
import user from './images/user.png'

const Home = () => {
  return (
    <div>
      <nav className="home-nav">
      <h1>Land Registry</h1>
      <ul>
        <li>
          <Link to={'login'}>
            Admin
          </Link>
        </li>
        <li>
        <Link to={'login'}>
            Inspector
          </Link>
        </li>
        <li>
        <Link to={'login'}>
            User
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
        <div><img src={user}/>
        <h3>User</h3>
        </div>


      </section>
    </div>
  );
};

export default Home;
