import './image.css';
import Imagevariable from './bike_background.jpg';
export default function image()
{
    return(
        <div className='container1'>
        <img src={Imagevariable} className="background" alt="background image"></img>
        </div>
    )
}