import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import './date_and_time.css';


export default function Date_And_Time(props){
    return (

      <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer 
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label={props.name} >
        <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} className="date_and_time" />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>
    )
}