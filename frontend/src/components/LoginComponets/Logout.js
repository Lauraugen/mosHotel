import "./FormStyles.css";
import React, { useEffect, useState} from "react";
import { useLocalState } from "../utils/useLocalStorage.js";
import jwtDecode from 'jwt-decode';


const LogOut = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [rol,setRol] =useLocalState("", "rol");

  useEffect(() => {
    setJwt("");
    setRol("");
    window.location.href = "/login";
   })
  return (
    <>
      
    </>
  );

}

export default LogOut;