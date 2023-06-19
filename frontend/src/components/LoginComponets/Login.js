import "./FormStyles.css";
import React, { useEffect, useState} from "react";
import { useLocalState } from "../utils/useLocalStorage.js";
import jwtDecode from 'jwt-decode';


const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [rol,setRol] =useLocalState("", "rol");
  const [id,setId] =useLocalState("", "id");

  function Login() {
    
      const payload = {
        email: email,
        password: password,
      };
      fetch("/api/client/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.status === 200) return res.json();
        })
        .then((data) => {
          // console.log(data.access_token)
          let decode = jwtDecode(data.access_token)
          setJwt(data.access_token);
          setRol(decode.rol)
          setId(decode.id)
          
          window.location.href = "/";
          
          // if(jwtDecode.rol == 1)
        });

    
  }
  return (
    <>
      <div className="form-container">
        
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => Login()}>Iniciar Sesion</button>
    
      </div>
    </>
  );

}

export default LoginClient;