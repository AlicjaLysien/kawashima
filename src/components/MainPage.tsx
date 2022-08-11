import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function MainPage() {

    const [number, setNumber] = useState<number | ''>('');
    
    const handleChange = (e: any) => {
        e.preventDefault()
        setNumber(number => e.target.value)
      }

    let navigate = useNavigate(); 
    const buttonOnClick = () =>{ 
      navigate('/calculations', {
        state: {
          number: number,
        }
      });
    }

    return (
        <div className="main main-input">
            <Typography 
                variant="h5" 
                component="h2">
                NoC
            </Typography>

            <TextField
              name="number"
              type="number"
              onChange={handleChange}
              margin="normal"
              value={number}
            />
            <Box>
            <Button 
              type="button"
              color="primary"
              variant="outlined"
              disabled={(number === '' || number === 0)}
              onClick={() => buttonOnClick()}>
              Start
            </Button>
            </Box>
          </div>
    );
}

export default MainPage;
