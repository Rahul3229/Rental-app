import { useState } from 'react';
import './Host_and_Bikes.css';
import Data from '../assets1.json';
import Image from './Image.js';
import Navigation from '../nav.js';
import Host from './Host_info.json';




import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';




const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function Host_and_Bikes()
{
    var title;
    var value;
    var trips;
    var description;
    var profile_picture;

    Host.map((host)=>{
         value=host.Rating;
         title=host.Model;
         trips=host.Number_of_Trips;
         description=host.Description;
         profile_picture=host.Profile_Picture;
    })

    console.log(value);
    
    var IMAGES =[];

    
   
       

        const length=Data.length;
        var increment=0;
        Data.map((data)=>{
                        
            IMAGES[increment] = data.src;
            increment=increment+1;
            
                        })

        // console.log(IMAGES);                


  

    const imagestyle= {
        position:"relative",
        width:"100%",
        backgroundImage:"url(require('bike1.jpg'))",
    }
    return (

      
      
      
      
      
      
        <div className="contain1" style={{
            maxWidth: "1200px",
            width: "100%",
            height:"700px",
            margin: "0 auto",
        }}>
            <div className='Nav12'>
            <Navigation />
            </div>
            <Image imageUrls={IMAGES} />









                                                              {/* //Bike info */}
            <div className='Host_Bike'>
                <h1 className="Model">{title}</h1>
                <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
            <h1 className='Trips'>Trips:{trips}</h1>
            
            <div className='Image_contain'>
              <img src={profile_picture} className='image1'></img>
            </div>
            <h1 className='Description'>Description:</h1>
            <p className='Description_Text'>{description}</p>
            </div>


        </div>
    )
}