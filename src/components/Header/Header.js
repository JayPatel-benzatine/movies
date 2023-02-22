import "./Header.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ThemeContext from '../../hooks/Context';
import { useContext } from "react";
const Header = () => {
  const first = useContext(ThemeContext)
  return (<>
    <span  className="header" id={first.theme}>
      🎬 Entertainment Hub 🎥
    </span>
    <button onClick={() => window.scroll(0, 0)} className="scrollbtn"><ArrowUpwardIcon /> </button>
  </>
  );
};

export default Header;
