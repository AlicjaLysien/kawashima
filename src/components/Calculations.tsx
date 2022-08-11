import * as React from 'react';
import { useEffect, useState } from 'react';
import { Calculation } from './classes/Calculation'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface NumberProp {
  number: number;
}

function Calculations() {
  const location = useLocation().state as NumberProp;

  const repetition: number = location.number
  console.log("repetition" + repetition)

  let examples: Calculation[] = [];
  let operations = ["add","minus","multi"];

  useEffect(() => {
    createCalculations(repetition)
    console.log('useEffect')
  }, []);

  const createCalculations = (repetition: number) => {
    repetition++;
    for(let i = 1; i < repetition; i++){
        let numberOne = Math.floor(Math.random() * 10);
        let numbertwo = Math.floor(Math.random() * 10);
        let operation = operations[Math.floor(Math.random() * operations.length)];
        const calc = new Calculation(numberOne, numbertwo, operation)
      examples.push(calc);
      console.log(repetition);
    }
  }

  return (
    <div className="main">
      

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {examples.map((item, id) => {
        
        console.log(item)
        console.log("fghgfh")
        return (
          <Grid item xs={2} sm={4} md={4} key={id}>
              <Item>sfds</Item>
            </Grid>
          )
      })
      }

      </Grid>
    </Box>
hggfh
    {Object.entries(examples).map((item, id) => {
      console.log(id)
      return <div key={id}>kfgj</div>
    }
    )}

    <div></div>
    </div>
  );
}

export default Calculations;
