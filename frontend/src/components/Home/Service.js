import "./ServiceStyles.css";
import HotelData from "./ServiceData";
import Buffet from "../../assets/servicesHotel/buffet.jpg";
import Aparcamiento from "../../assets/servicesHotel/aparcamiento.jpeg";
import Spa from "../../assets/servicesHotel/spa.jpg";
import Lavanderia from "../../assets/servicesHotel/lavanderia.jpg";
import Piscina from "../../assets/servicesHotel/piscina.jpg";
import Gym from "../../assets/servicesHotel/gym.jpg";
import MeetingRoom from "../../assets/servicesHotel/meeting.jpg";

function Service() {
  return (
    
    <div className="trip">
      <h1>Servicios disponibles</h1>
      <div className="tripcard">
        <HotelData
          image={Aparcamiento}
          heading="Aparcamiento"
          
        />
        <HotelData
          image={Buffet}
          heading="Buffet"
        />
        <HotelData
          image={Spa}
          heading="Spa"
        />
         <HotelData
          image={Gym}
          heading="Gym"
        />
        <HotelData
          image={MeetingRoom}
          heading="Sala de reuniones"
        />
        <HotelData
          image={Piscina}
          heading="Piscina climatizada"
        />
        <HotelData
          image={Lavanderia}
          heading="Servicio lavanderia"
  
        />
      </div>
    </div>
  );
}

export default Service;
