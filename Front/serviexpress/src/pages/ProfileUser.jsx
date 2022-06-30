import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import { UploadImg } from "../components/UploadImg";
import FormControl from "@mui/material/FormControl";
import { postProfileUser } from "../redux/action";
import styles from "./styles/profileUser.module.css";
import { AiOutlineCamera } from "react-icons/ai";
import Edit from "../components/Edit";

const History = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre del servicio</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Plomeria</td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>activo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Carpinteria</td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>inactivo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const transactions = () => {
  return <div>Transaccion pending...</div>;
};

const responses = () => {
  return {
    edit: Edit,
    history: History,
    transactions,
  };
};

const capitalize = (name) => {
  if (typeof name === "string" && name.length > 1) {
    if (name.includes(",") && name.length < 3) return "";
    return name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
};

const ProfileUser = () => {
  const {
    user: {
      name,
      last_name,
      country,
      rol,
      state,
      location,
      email,
      avatar_image,
      phone_number,
      buyer_reputation,
      seller_reputation,
      province_state,
    },
  } = useSelector((state) => state);

  const [component, setComponent] = useState(null);
  const avatarImage =
    avatar_image ||
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

  const handleOption = ({ target: { id } }) => setComponent(responses()[id]());

  return (
    <div className="page-seller_register">
      <BurgerButton />
      <div className={styles["profile-container"]}>
        <div className={styles.profile}>
          <div></div>
          <div className={styles["avatar-container"]}>
            <div className={styles["avatar-image"]}>
              <img src={avatarImage} alt="Avatar" />
            </div>
            <div className={styles["camera-icon"]}>
              <AiOutlineCamera />
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.fields}>
              <div>Email: {email}</div>
              <div>Name: {capitalize(name)}</div>
              <div>Last name: {capitalize(last_name)}</div>
              <div>Phone number: {phone_number}</div>
              <hr />
              <div>Country: {capitalize(country)}</div>
              <div>Province state: {capitalize(province_state)}</div>
              <div>Location: {capitalize(location)}</div>
              <hr />
              <div>Buyer reputation: {buyer_reputation}</div>
              <div>Sheller reputation: {seller_reputation}</div>
              <hr />
              <div>Rol: {rol}</div>
              <div>State: {state}</div>
            </div>
          </div>
        </div>
        <div className={styles["form-container"]}>
          
          <div>{component ? component : responses()["edit"]()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;

// <MyTextField
//   required
//   label="LAST NAME"
//   type="text"
//   name="last_name"
// />
