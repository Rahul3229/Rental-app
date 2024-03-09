
import './App.css';
import Nav from  './nav.js';
import New_Card from './New_Card.js';

import Host_and_Bikes from './Host_and_Bikes/Host_and_Bikes.js';

// import Image from './image.js';
 import Map from './maps.js'
// import CardSection from './cardssection.js';
function App() {
  return (
    <div className="App">

     {/* <Host_and_Bikes />  */}

        <Nav /> 
      <New_Card />  
      {/* <Image />  */}
       <Map />   
    </div>
  );
}

export default App;
