import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalState } from "../utils/useLocalStorage.js";
import "./NavbarStyles.css";
import jwt_decode from "jwt-decode";


const EmployeeNavbar = () =>  {
//   const [jwt, setJwt] = useLocalState("", "jwt");
  const [state, setState] = useState("");
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  const jwtDecode = jwt_decode(jwt);
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
            <Link className={"nav-links"} to={"/login"}>
                <i className={"fa-solid fa-user"}></i>
                {"LogOut"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={ "/"}>
                <i className={"fa-solid fa-house-user"}></i>
                {"Home"}
            </Link>
            </li>
            
            <li >
            <Link className={"nav-links"} to={"/bookings"}>
                <i className={"fa-solid fa-bed"}></i>
                {"Reservas"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/rooms"}>
                <i className={"fa-solid fa-bed"}></i>
                {"Habitaciones"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/clients"}>
                <i className={"fa-solid fa-house-user"}></i>
                {"Clientes"}
            </Link>
            </li>
            <li >
            <Link className={"nav-links"} to={"/profileEmployee"}>
                <i className={"fa-solid fa-user"}></i>
                {"Perfil"}
            </Link>
            </li>
            
            
            
        
          
        </ul>
      </nav>
    );
  }
}

export default EmployeeNavbar;