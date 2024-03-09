import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './maps.css';
import Data from './assets1.json';



export default function Maps(){
   //testing for git
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBfuDV3j0AKHK_H83kcSlL74IZM6bON4wY',
      });
      const center = useMemo(() => ({ lat: 40.117862 , lng: -83.178291 }), []);
    
      return (
        <div className="Mapping">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
              
            >
           <MarkerF position={center}></MarkerF>
           
              {
          Data.map((item,id)=>(
            <MarkerF position={{lat:item.coordinatesX,lng:item.coordinatesY}}></MarkerF> 
          ))
          }
      
           
           </GoogleMap>
          )}
        </div>
      )
}