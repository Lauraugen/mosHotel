import React from "react";
import { useState } from 'react';
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Travel from "./routes/About";
import Contact from "./routes/Contact";
import HomeClient from "./routes/Client/Home";
import AboutClient from "./routes/Client/About";
import TravelClient from "./routes/Client/Travel";
import ContactClient from "./routes/Client/Contact";
import RoomClient from "./routes/Client/RoomType";
import Room from "./routes/RoomType"
import LogOut from "./components/LoginComponets/Logout";
import { useLocalState } from './components/utils/useLocalStorage';

import { Route, Routes } from "react-router-dom";
import LoginGeneral from "./routes/LoginGeneral";
import BookingClient from "./routes/Client/Booking";
import BookingClientAdd from "./components/Booking/BookingClientAdd";


function App() {
  const [jwt,setJwt] = useLocalState("","jwt");
  const [rol,setRol] = useLocalState("","rol");

  // useEffect(() => {
  //   const decode = jwtDecode(jwt)
  //    setJwtDecode(decode);
  // });

  // function decodeJwt(){
  //   console.log(jwt)
  //   if(jwt) {
  //     const decJwt = jwtDecode(jwt);
  //     return decJwt.rol;
  //   }
  //   return "";
  // }

  return (
    <div className="App">
      <Routes>
   
        <Route path="/" 
          element={(rol == 3) ? (
          <HomeClient />) : (rol == 2) ? (
          <HomeEmployee />) : (rol == 1) ? (
          <HomeAdmin />) : (<Home />)
        } /> 
        <Route path="/about" 
          element={(rol == 3) ? (
          <AboutClient />) : (<About />)
        } />
        <Route path="/travel" 
          element={(rol == 3) ? (
          <TravelClient />) : (<Travel />)
        } />
        <Route path="/contact" 
          element={(rol == 3) ? (
          <ContactClient />) : (<Contact />)
        } />
        
        <Route path="/room-type" 
          element={(rol == 3) ? (
          <RoomClient />) : (<Room />)
        } /> 
        <Route path="/login" element={<LoginGeneral />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/bookingClient" element={<BookingClient />} />
        <Route path="/bookingClientAdd" element={<BookingClientAdd />} />
        {/* 
        <Route path="/profile" element={<LoginGeneral />} />
        
        <Route path="/clients" element={<LoginGeneral />} />
        <Route path="/employees" element={<LoginGeneral />} />
        <Route path="/rooms" element={<LoginGeneral />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
