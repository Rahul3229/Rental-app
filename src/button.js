import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import './button.css';

export default function button(){
    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }} >
       
       <Button size="lg" className='button1'>Search</Button>
        
      </Box>
    )
}