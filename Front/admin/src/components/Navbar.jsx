import "./styles/Navbar.scss";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import SearchIcon from "@mui/icons-material/Search";
import SwitchDark from "../components/Elements/SwitchDark";

const Navbar = () => {


  return (
    <div className="navbarr">
    <div className="wrapper">
      {/* <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchIcon />
      </div> */}
      <div className="items">
        <div className="itemm">
          <SwitchDark/>
        </div>
        <div className="itemm">
          <LanguageOutlinedIcon className="icon" />
          English
        </div>
        <div className="itemm">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="itemm">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="itemm">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="itemm">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="itemm">
          <img
            src="https://i.ibb.co/nfPP3tS/OIP.jpg"
            alt="bby-tiger"
            className="avatar"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
/* 

// import { DarkModeContext } from "../context/darkModeReducer";
// import { useContext } from "react";


  const {dispatch} = useContext(DarkModeContext);
*/
 