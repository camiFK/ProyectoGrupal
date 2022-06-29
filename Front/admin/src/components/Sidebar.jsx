import "./styles/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { act_themeDark, act_themeLight } from "../redux/action";
import { useDispatch } from "react-redux";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Sidebar = () => {
  const xDispatch = useDispatch();

  const xNavigate = useNavigate();

  return (
    <div className="sidebarr">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", textAlign: "center" }}>
          <img
            className="logo"
            src="https://i.ibb.co/sbkstqQ/log.png"
            alt="serviexpress"
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="iconn" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="iconn" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="iconn" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="iconn" />
              <span>Services</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="iconn" />
            <span>Orders</span>
          </li>
          </Link>
          {/* <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="iconn" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="iconn" />
            <span>Notifications</span>
          </li> */}
          <p className="title">SERVICE</p>
          <li onClick={() => {xNavigate('/attendance')}}>
            <SupportAgentIcon className="iconn" />
            <span>Customer Support</span>
          </li>
          {/* <li>
            <SettingsSystemDaydreamIcon className="iconn" />
            <span>System Health</span>
          </li>
          <li>
            <DisplaySettingsIcon className="iconn" />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsIcon className="iconn" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsIcon className="iconn" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="iconn" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

/* 

// import { DarkModeContext } from "../context/darkModeReducer";
// import { useContext } from "react";
  // const {dispatch} = useContext(DarkModeContext);

  
*/
