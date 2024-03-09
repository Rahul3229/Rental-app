import './New_Card.css';
import Component from './Card_Component.js';
import Assets from './assets1.json';

export default function New_Card(){
    return (
        <div className="contain">
            
            
            
                { Assets.map((item,id)=>(
                   
                   <Component source={item.src} description={item.description} rating={item.rating}/>

                ))
            
             }
           
        </div>
    )
}