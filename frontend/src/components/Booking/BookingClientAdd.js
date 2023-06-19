import "./FormStyles.css";
import React, { useEffect, useState} from "react";
import { useLocalState } from "../utils/useLocalStorage.js";
import jwtDecode from 'jwt-decode';


const BookingClientAdd = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [rol,setRol] =useLocalState("", "rol");

  function RegisterBooking() {
    
      const payload = {
        checkout: checkout,
        checkin: checkin,
        id_room: id_room,
        spa: spa,
        dinner: dinner,
        gym: gym,
        lunch: lunch,
        parking: parking,
        breakfast: breakfast,
        id_client: id_client
      };
      fetch("http://127.0.0.1:5000/api/booking/post", {
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
          console.log(data)
          
          
          window.location.href = "/bookingClient";
          
          // if(jwtDecode.rol == 1)
        });

    
  }
  return (
    <>
      <div className="form-container">
        <form>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => Login()}>Iniciar Sesion</button>
        </form>
      </div>
    </>
  );

}

export default BookingClientAdd;