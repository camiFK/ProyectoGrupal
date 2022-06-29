import styled, { css } from "styled-components";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const [showFixed, setShowFixed] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setShowFixed(true) : setShowFixed(false);
  };

  window.addEventListener("scroll", handleScroll);

  const xNavigate = useNavigate();

  const mNavigation = (pPath) => {
    xNavigate(`/${pPath}`);
  };

  const {user} = useSelector((state) => state);
 

  const renderList = (fixed) => (
    <List fixed={fixed}>
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon fontSize="large" />}
        onClick={() => {
          mNavigation("#");
        }}
      />

      <BottomNavigationAction
        label="seller"
        icon={<VolunteerActivismIcon fontSize="large" />}
        onClick={() => {
          mNavigation("seller");
        }}
      />

      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon fontSize="large" />}
        onClick={() => {
          mNavigation(`favorites/${user.id}`);
        }}
      />

      <BottomNavigationAction
        label="Orders"
        icon={<ShopTwoIcon fontSize="large" />}
        onClick={() => {
          mNavigation("orders");
        }}
      />
    </List>
  );

  return <Fragment>{showFixed && renderList(true)}</Fragment>;
};

export default NavigationBar;

export const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fcdc3c;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto !important;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        transform: scale(0.7);
        z-index: 7;
      }
    `}
`;
