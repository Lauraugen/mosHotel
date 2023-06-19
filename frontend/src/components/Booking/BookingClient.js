import "./FormStyles.css";
import React, { useEffect, useState} from "react";
import { useLocalState } from "../utils/useLocalStorage.js";
import jwtDecode from 'jwt-decode';


const BookingClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [booking, setBooking] = useState([]);
  const [element, setElement] = useState([]);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [rol,setRol] =useLocalState("", "rol");
  const [id,setId] =useLocalState("", "id");
    
    useEffect(() => {
      fetch(`/api/booking/all/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "get"
      })
        .then((res) => {
          if (res.status === 200) return res.json();
        })
        .then((data) => {
          console.log(data)
          setBooking(data)
          
          
          // if(jwtDecode.rol == 1)
        });
    }, []);

    const update = (element) => {
        setElement(booking)
        window.location.href = '/bookingClientUpdate'

    }
    const deleteBooking = (element) => {
      fetch(`/api/booking/delete/${element.id}`,{
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
    }).then(res => {if(res.status === 200) navigate("/dashboard")})

  }

if(booking){
  
  return (
    <>
      <div className="form-container">
      <table className="table">
          <tbody>
            <tr>
              

              <th>Checkin</th>
              <th>Checkout</th>
              <th>Spa</th>
              <th>Dinner</th>
              <th>Gym</th>
              <th>Lunch</th>
              <th>Parking</th>
              <th>Breakfast</th>

              
          
            </tr>
            {booking.map((element, index) => (
              <tr key={index}>
                <td onClick={() => alert("Update Reserva")}>{element.checkin}</td>
                <td>{element.checkout}</td>
                <td>{element.spa.toString()}</td>
                <td>{element.dinner.toString()}</td>
                <td>{element.gym.toString()}</td>
                <td>{element.lunch.toString()}</td>
                <td>{element.parking.toString()}</td>
                <td>{element.breakfast.toString()}</td>
                <td onClick={() => alert("Eliminar Reserva")}><strong>Cancelar</strong></td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    
    </>
  );
}else{
    return <div>Loading...</div>;
}

}

export default BookingClient;