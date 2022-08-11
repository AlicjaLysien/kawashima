import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CalculateIcon from '@mui/icons-material/Calculate';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



const Divider = styled('hr')(() => ({
    flexSrink: 0,
    flexGrow: 1,
    border: 'none'
}));

const List = styled('ul')(() => ({
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
}));
  
const navItems = {'Home': '', 'Calculations': 'calculations'};

function Navigation() {

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
     
            <CalculateIcon 
                sx={{ fontSize: 34 }}
            />
        
        <Typography component="h2" variant="h6">
            Kawashima
          </Typography>
    
          <Divider/>
          <List>
          {Object.entries(navItems).map((item, id) => {
            const [key, value] = item;
          return (
            <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <NavLink className="link" to={value} end> 
                {key}
            </NavLink>
            </ListItemButton>
          </ListItem>
          )
            })
        }
        </List>
   
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
}

export default Navigation;
