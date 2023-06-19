import "./FormStyles.css";
import React, { useEffect, useState} from "react";
import { useLocalState } from "../utils/useLocalStorage.js";
import jwtDecode from 'jwt-decode';


const BookingClientAdd = () => {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [id_room, setIdRoom] = useState("");
  const [spa, setSpa] = useState("");
  const [dinner, setDinner] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [rol,setRol] =useLocalState("", "rol");

  function AddBooking() {
    
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
        <label>Checkin</label>
          <input placeholder="Checkin" type="date" onChange={(e) => setCheckin(e.target.value)}/>
          <label>Checkin</label>
          <input placeholder="Checkout" type="date" onChange={(e) => setCheckout(e.target.value)} />
          <input placeholder="Id_room" type="number" onChange={(e) => setIdRoom(e.target.value)} />
          <label>Spa</label>
          <input placeholder="Spa" type="checkbox" onChange={(e) => setSpa(e.target.value)} />
          <label>Dinner</label>
          <input placeholder="Dinner" type="checkbox" onChange={(e) => setDinner(e.target.value)} />
          <label>Gym</label>
          <input placeholder="Gym" type="checkbox" onChange={(e) => setGym(e.target.value)} />
          <button onClick={() => AddBooking()}>Reservar</button>
        </form>
      </div>
    </>
  );

}

export default BookingClientAdd;