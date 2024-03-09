import TextBox from './text_box.js';
import DateTime from './date_and_time.js';
import './nav.css';
import Button from './button.js';

export default function Nav(){

    return(
        <div className="nav">
        <TextBox />
        <DateTime name="From"/>
        <DateTime name="Until"/>
        <Button />
        </div>
    )
}