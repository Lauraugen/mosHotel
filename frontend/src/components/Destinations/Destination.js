import React from "react";
import Bosque1 from "../../assets/travels/bosque.png";
import Bosque2 from "../../assets/travels/bosque2.jpg";
import Pabellon1 from "../../assets/travels/Pabellón-Dorado-Kioto.jpg";
import Pabellon2 from "../../assets/travels/pabellon2.jpg";
import Inari1 from "../../assets/travels/inari.jpg";
import Inari2 from "../../assets/travels/inari2.jpg";
import Castillo1 from "../../assets/travels/osaka.jpg";
import Castillo2 from "../../assets/travels/Castillo-de-Osaka.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Destinos Populares</h1>
        <p>Recomendaciones cerca de Kyoto</p>
        <DestinationData
          className="first-des"
          heading="Bosque de Bambu en Arashiyama"
          text="El bosque de bambú de Arashiyama y Sagano (嵐山竹林?) es un bosque natural de bambú ubicado en Arashiyama, Kioto, Japón. El bosque se compone principalmente de bambú moso (Phyllostachys edulis) y consta de varios caminos para turistas y visitantes. El Ministerio de Medio Ambiente lo considera parte del paisaje sonoro de Japón"
          img1={Bosque1}
          img2={Bosque2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Pabellon Dorado"
          text="Kinkaku-ji (金閣寺? lit. Templo del Pabellón de Oro) es el nombre informal del Rokuon-ji (鹿苑寺, Templo del jardín de los ciervos) en Kioto, Japón. Fue construido originalmente en 1397 como villa de descanso del shōgun Ashikaga Yoshimitsu, llamada Kitayama.1​ Tras su muerte su hijo transformó el edificio en un templo Zen de la secta Rinzai. El templo se quemó varias veces durante la guerra Ōnin (siglo XV) y en 1950, cuando el novicio Hayashi Yoken prendió fuego al edificio. El edificio actual es una reconstrucción.
              Forma parte del conjunto de Monumentos históricos de la antigua Kioto (ciudades de Kioto, Uji y Otsu) declarados Patrimonio de la Humanidad por la Unesco en el año 1994."
          img1={Pabellon1}
          img2={Pabellon2}
        />
         <DestinationData
          className="first-des"
          heading="Fushimi Inari-taisha"
          text="El Fushimi Inari-Taisha (伏見稲荷大社?) es el principal santuario sintoísta (jinja, 神社) dedicado al espíritu de Inari, y situado en Fushimi-ku, uno de los distritos de Kioto (Japón). El santuario se encuentra situado en la base de una montaña también conocida como Inari, que incluye varios senderos para llegar a otros santuarios más pequeños.
              Desde las épocas más antiguas de Japón, Inari era vista como patrona de los negocios (en tanto que cada Torii existente en el santuario ha sido donado por algún hombre de negocios japonés) aunque Inari en primer lugar fuera diosa del arroz. Los comerciantes y artesanos ofrecían culto a Inari a cambio de obtener riqueza en sus negocios, por lo que donaban numerosos torii que actualmente forman parte de la vista panorámica del templo. De este famoso templo se dice que posee más de 32000 pequeños torii, llamados santuarios.1​"
          img1={Inari1}
          img2={Inari2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Castillo Osaka"
          text="El castillo de Osaka (大坂城・大阪城 'Ōsaka-jō'?) es un castillo japonés ubicado en Osaka, Japón. Originalmente llamado Ōzaka-jō, es uno de los castillos más famosos del país y desempeñó un papel importante en la unificación de Japón durante el período Azuchi-Momoyama del siglo xvi.
             El castillo cubre una superficie de aproximadamente un kilómetro cuadrado, dentro del parque público del Castillo de Osaka (大阪城公園 Ōsaka-jō kōen?). Fue construido en dos plataformas de terreno rellenado, con murallas a base de piedras cortadas, y está rodeado de un pozo con agua de manera similar a los castillos europeos. El castillo tiene ocho pisos interiores (accesibles por medio de un ascensor), y cinco pisos exteriores, y fue construido sobre una base de piedra alta para proteger a sus ocupantes de atacantes con armas blancas.
             El castillo está abierto al público y es fácilmente accesible desde la estación parque público del Castillo de Osaka (大阪城駅 Ōsaka-jō eki?) de la línea circular de Osaka (大阪環状線 Ōsaka-kanjōsen?).
             El castillo es un punto popular de encuentro durante los festejos del hanami, que tiene lugar durante el florecimiento del cerezo japonés.
             El interior del castillo alberga un museo, una sala de convenciones y el Altar Toyokuni, dedicado a Toyotomi Hideyoshi."
          img1={Castillo1}
          img2={Castillo2}
        />
        <DestinationData
          className="first-des"
          heading="Universal Studios Japan"
          text="Universal Studios Japan (ユニバーサル・スタジオ・ジャパン Yunibāsaru Sutajio Japan), con sede en Osaka, Japón es uno de los cuatro parques temáticos Universal Studios, es propiedad y está operado por USJ Co., Ltd. (TYO: 2142). El parque es similar al de Universal Orlando Resort, ya que contiene muchos de los mismos paseos. El área total es de 54 hectáreas. La mayoría de los visitantes son turistas japoneses o de otros países como la República Popular China y Corea del Sur. En 2005, Goldman Sachs se convirtió en el mayor accionista de Universal Studios Japan. Universal todavía tiene una pequeña participación minoritaria en el parque. El parque se inauguró el 31 de marzo de 2001. 11 millones de personas ingresaron en Universal Studios Japón en su primer año de funcionamiento, el hit más rápido que cualquier parque haya alcanzado."
          img1={Bosque1}
          img2={Bosque2}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
