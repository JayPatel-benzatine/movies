import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";
import './nav.css'
import Themecontext from '../hooks/Context'
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  const first = React.useContext(Themecontext)

  React.useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);

  return (
  <div className="" id={first.theme}>
    <Box sx={{ width: 500 }} >
      <BottomNavigation
        showLabels
        value={value}
        className='nav'
        id={first.theme}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ 'color': 'white' }} label="Tranding" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ 'color': 'white' }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ 'color': 'white' }} label="TvSeries" icon={<TvIcon />} />
        <BottomNavigationAction style={{ 'color': 'white' }} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
    </div>
  );
}
