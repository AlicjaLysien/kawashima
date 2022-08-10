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
        console.log(number)
      }

    let navigate = useNavigate(); 
    const buttonOnClick = () =>{ 
      let path = `calculations`; 
      navigate(path);
    }

    return (
        <>
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
            <Button 
              type="button"
              color="primary"
              variant="outlined"
              disabled={(number === '' || number === 0)}
              onClick={(event) => buttonOnClick()}>
              Start
            </Button>
        </>
    );
}

export default MainPage;
