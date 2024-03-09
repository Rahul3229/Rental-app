import './Image.css';
import {useState} from "react";



export default function Image(props){
  

    const [imageIndex, setImageIndex]=useState(0);
    var array=props.imageUrls;
    function left_func(){
        setImageIndex(index=>{
            if(index==0)
            return array.length-1
            return index -1
        })
    }

    function right_func(){
        setImageIndex(index=>{
            if(index==array.length-1)
            return 0
            return index+1
        })
    }

    
    return (
        <div style={{width:"100%", height: "100%"}}>
        <img src={array[imageIndex]} className='image1' />
        <button className='left' onClick={left_func}>Left</button>
        <button className='right' onClick={right_func}>Right</button>
        </div>
    )
}