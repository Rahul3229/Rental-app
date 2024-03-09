import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './text_box.css'
export default function Text_Box(){
    


  const change_function = (event) => {
    const input = event.target;
    const value = input.value;
    console.log(input);
    console.log(value);
    
  };
  
  
  
  return(

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" className="textbox" label="Search For Bikes" variant="outlined" onChange={change_function} />
      </Box>
    )
}