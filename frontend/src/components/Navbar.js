import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useLocalState } from "./utils/useLocalStorage.js";
import "./NavbarStyles.css";
import jwt_decode from "jwt-decode";


const Navbar = () =>  {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [state, setState] = useState("");
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  const jwtDecode = jwt_decode(jwt);
  const logout = ()=> {
    setJwt("");
    console.log(jwt)
    console.log("Fuera login")
  }
  {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Mos<i className="fa-solid fa-hotel"></i>otel</h1>
        <div className="menu-icons"  onClick={() => handleClick()}>
          <i
            className={state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (jwt){
            if (item.title == "Login"){
               item.title = "LogOut",
               item.url = "/login",
               item.cName = "nav-links",
               item.icon= "fa-solid fa-user"
              return (
              
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon} onClick={()=> logout()}></i>
                  {item.title}
                </Link>
              </li>
            );
            }
            
            if ((item.login == "True") && (jwt) ){
              if((item.user == "Client")&& (jwtDecode.rol == 3)){
                return (
              
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              }
              if((item.user == "Employee")&& (jwtDecode.rol == 2)){
                return (
              
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              }
              if((item.user == "Admin")&& (jwtDecode.rol == 1)){
                return (
              
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      <i className={item.icon}></i>
                      {item.title}
                    </Link>
                  </li>
                );
              }

            }
            
              
            } else {
              return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
            }
            
          })}
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;
