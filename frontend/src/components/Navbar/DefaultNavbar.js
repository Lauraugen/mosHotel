import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalState } from "../utils/useLocalStorage";
import "./NavbarStyles.css";
import jwtDecode from "jwt-decode";


const DefaultNavbar = () =>  {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [state, setState] = useState("");
  // const [jwtDec, setJwtDecode] = useState("");
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  // useEffect(() => {
  //   const decode = jwtDecode(jwt)
  //    setJwtDecode(decode);
  // });
//   const logout = ()=> {
//     setJwt("");
//     console.log(jwt)
//     console.log("Fuera login")
//   }
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
                  
            
            <li >
            <Link className={"nav-links"} to={ "/"}>
                <i className={"fa-solid fa-house-user"}></i>
                {"Home"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/about"}>
                <i className={"fa-solid fa-circle-info"}></i>
                {"Sobre Nosotros"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/travel"}>
                <i className={"fa-solid fa-car"}></i>
                {"Viajes"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/contact"}>
                <i className={"fa-solid fa-envelope"}></i>
                {"Contacto"}
            </Link>
            </li>
           
            <li >
            <Link className={"nav-links"} to={"/room-type"}>
                <i className={"fa-solid fa-bed"}></i>
                {"Habitaciones"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/login"}>
                <i className={"fa-solid fa-user"}></i>
                {"Login"}
            </Link>
            </li>
            
            
            
            
        
          
        </ul>
      </nav>
    );
  }
}

export default DefaultNavbar;