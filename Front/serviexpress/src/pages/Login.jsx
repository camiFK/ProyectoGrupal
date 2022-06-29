import React, { useState, useEffect } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import Alert from "@mui/material/Alert";
import swal from "sweetalert";
import {createUserChatEngine,getUser} from '../redux/action'

import "./styles/Login.scss";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserr,
  getErrorRegister,
  clearErrorRegister,
  loginUser,
  clearErrorLogin,
  clearErrorDataLogin,
} from "../redux/action";
const baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

const validate = ({ email, password }) => {
  let error = "";

  if (!password || !email) {
    error = "Asegurese de llenar todos los campos";
  }

  return error;
};



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorLogin, errorDataLogin, rdcr_isAuth } = useSelector(
    (state) => state,
  );

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const loginGoogle = () => {
    window.localStorage.setItem("session", true);
    window.localStorage.setItem("sendLogin", true);
    window.open(`${baseURL}/login/google`, "_self");
  };
  const sendLogin = window.localStorage.getItem("sendLogin");
  const user = useSelector(state => state.user);

  const loginLocal = () => {
    setError(validate(form));
    
    if (!error) {
      dispatch(
        loginUser({
          username: form.email,
          password: form.password,
        }),
      );
      dispatch(createUserChatEngine(form.email,form.email))
   
      setForm({
        email: "",
        password: "",
      });
    }
  };

  const handleForm = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (sendLogin) {
      
      window.localStorage.removeItem("sendLogin");
      window.localStorage.removeItem("session");
    }
    if (errorLogin) {
      swal("Error", errorLogin, "error");
      dispatch(clearErrorLogin());
    }
    if (errorDataLogin) {
      swal("Error", errorDataLogin, "error");
      dispatch(clearErrorDataLogin());
    }
    if (rdcr_isAuth && !sendLogin) {  
/*       dispatch(getUser());
      console.log(user);
      dispatch(createUserChatEngine(user.email,user.email)); */
      swal("Inicio de sesión correcto", "Logeado", "success");
      navigate("/home");
      // si no da error es una feature 😂
    }
  }, [dispatch, errorLogin, errorDataLogin, rdcr_isAuth, navigate, sendLogin,form.email]);

  return (
    <div className="page-login">
      <BurgerButton />

      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Login
          </Typography>

          <MyButtonThree
            variant="contained"
            endIcon={<GoogleIcon />}
            onClick={loginGoogle}
          >
            Sign In With Google
          </MyButtonThree>

          <MyTextField
            required
            label="E-MAIL"
            name="email"
            type="email"
            value={form.email}
            onChange={handleForm}
          />
          <MyTextField
            label="PASSWORD"
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
          />

          {error ? (
            <Alert
              severity="error"
              sx={{ width: "260px", m: 0.5, fontSize: "1.3rem" }}
            >
              {error}
            </Alert>
          ) : null}

          <MyButtonTwo
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={loginLocal}
          >
            Login
          </MyButtonTwo>

          <div className="Login-3">
            <div className="Login-3remenver">
              {/* <Checkbox
                {...checked}
                sx={{
                  color: "#000000",
                  "&.Mui-checked": {
                    color: "#fcdc3c",
                  },
                }}
              /> 
              <Typography variant="body1" color="initial">
                Remember me
              </Typography>
              */}
            </div>
            <Link to="/sendEmail/recovery">Forgot Password</Link>
          </div>

          <Typography variant="body1" color="initial">
            Not a Member Yet?
            <Link to="/register"> Join now</Link>
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default Login;
