import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyHeader, ListNav, StyledBurger } from "./NavBar-StyleComp";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar from "./NavigationBar";
import { InitialSession, LoginSession } from "./SubComponents";
import { IconButton } from "@mui/material";
import {  getUser } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const logo = require("../../assets/icons/log.png");

//=>=>=>=>==>=>=>=>=>==> COMPONENT -------------------------
const BurgerButton = ({ msg,aux }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const nav = useNavigate();
  const mReloadOpen = () => {
    setOpen(!open);
  };

  const { user, rdcr_isAuth } = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(user)?.length > 0) {
      setAvatar(user.avatar_image);
    }
    if (!rdcr_isAuth && user.password) {
      dispatch(getUser());
    }
  }, [avatar, rdcr_isAuth, dispatch, user]);

  return (
    <MyHeader pOpen={open}>
      <div className="initial">
        <div
          onClick={() => {
            nav(`/Home`);
          }}
        >
          <figure>
            <img src={logo} alt="" />
          </figure>
        </div>

        <IconButton className="burgerFigure" onClick={mReloadOpen}>
          <StyledBurger pOpen={open}>
            <span></span>
            <span></span>
            <span></span>
          </StyledBurger>
        </IconButton>
      </div>
 
      
      {!rdcr_isAuth ? <InitialSession /> : <LoginSession avatar={avatar} />}

      <ListNav pOpen={open}>
        <li>
          <Link to="/" onClick={mReloadOpen}>
            Landing Page
          </Link>
        </li>
        <li>
          <Link to="/home" onClick={mReloadOpen}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/c_recipeA" onClick={mReloadOpen}>
            Un Link
          </Link>
        </li>
      </ListNav>

      {!open && <NavigationBar />}
    </MyHeader>
  );
};

export default BurgerButton;
