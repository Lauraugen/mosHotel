import "./ServiceStyles.css";
import HotelData from "./ServiceData";
import Capsula from "../../assets/rooms/capsula.jpg";
import Doble from "../../assets/rooms/doble.jpg";
import Individual from "../../assets/rooms/individual.jpg";
import Matrimonio from "../../assets/rooms/matrimonio.jpg";
import Litera from "../../assets/rooms/literas.jpg";
import Ryokan from "../../assets/rooms/ryokan.jpg";



function RoomType() {
  return (
    
    <div className="trip">
      <h1>Tipos de Habitaciones disponibles</h1>
      <div className="tripcard">
        <HotelData
          image={Capsula}
          heading="Capsula"
          
        />
        <HotelData
          image={Individual}
          heading="Individual"
        />
        <HotelData
          image={Matrimonio}
          heading="Matrimonio"
        />
         <HotelData
          image={Litera}
          heading="Litera"
        />
        <HotelData
          image={Doble}
          heading="Doble"
        />
        <HotelData
          image={Ryokan}
          heading="Ryokan"
        />

      </div>
    </div>
  );
}

export default RoomType;
