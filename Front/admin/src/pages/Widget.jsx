import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/Widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { act_getUsersCount, getOrders, act_getAllCategories, act_getAllServices} from '../redux/action.js'

const Widget = ({ type }) => {
  const { rdcr_users_count, orders, rdcr_categories, rdcr_services } = useSelector((state) => state)  
  const dispatch = useDispatch();


  useEffect(() => {
    switch (type) {
      case "user":{
        dispatch(act_getUsersCount());
      }
      case "orders":{
        dispatch(getOrders());
      }
      case "categories":{
        dispatch(act_getAllCategories());
      }
      case "services":{
        dispatch(act_getAllServices());
      }
    }
  },[dispatch, type])


  let data;
  
    //temporary
    // const diff = 20;
  
    switch (type) {
      case "user":
        data = {
          title: "USERS",
          count: rdcr_users_count,
          isMoney: false,
          link_title: "See all users",
          link: '/users',
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "orders":
        data = {
          title: "ORDERS",
          count: orders.length,
          isMoney: false,
          link: '/orders',
          link_title: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "categories":
        data = {
          title: "CATEGORIES",
          isMoney: false,
          link: '/categories',
          count: rdcr_categories.length,
          link_title: "View all categories",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "services":
        data = {
          title: "SERVICES",
          isMoney: false,
          count: rdcr_services.length,
          link_title: "View all services",
          link: '/services',
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }
  
    return (
      <div className="widget"> 
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {data.count}
          </span>
          <Link to={`${data.link}`} style={{ textDecoration: "none" }} className="link">{data.link_title}</Link>
        </div>
        {/* <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div> */}
      </div>
    );
  };

export default Widget;
