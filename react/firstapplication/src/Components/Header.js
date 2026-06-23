import React from "react";
import "../Counter.css";

function Header() {
    return (
      <div className="main-header">
             <ul>
               <li>Inicio</li>
               <li>Contador</li>
               <li>Acerca de</li>
             </ul>
      </div>        
    );
}

export default Header;


//import { Link } from "react-router-dom";

/*
function Header() {
    return (
      <header className="main-header">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;*/