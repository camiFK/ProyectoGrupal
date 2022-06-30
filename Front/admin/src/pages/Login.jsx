import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import "./styles/Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action";
import swal from "sweetalert";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import "@coreui/coreui/dist/css/coreui.min.css";

const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = "the field 'email' is required";
  }

  if (!password) {
    errors.password = "the field 'password' is required";
  }

  return errors;
};

const defaultForm = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultForm);
  const [send, setSend] = useState(false);
  const { loginSuccess, messageLogin } = useSelector((state) => state);
  const session = window.localStorage.getItem("session");

  const handleChange = ({ target: { name, value } }) => {
    setError(
      validate({
        ...form,
        [name]: value,
      }),
    );

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(error).some(Boolean)) {
      dispatch(
        login({
          username: form.email,
          password: form.password,
        }),
      );
    } else {
      swal("pending", "the fields is required", "error");
    }
    setForm(defaultForm);
    setSend(true);
  };

  useEffect(() => {
    if (loginSuccess && send) {
      navigate("/home");
    }
    if (send) {
      swal("message", messageLogin, "success");
      setSend(false);
    }
  }, [navigate, loginSuccess, messageLogin, send]);

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    value={form}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="username"
                        name="email"
                        value={form.email}
                      />
                    </CInputGroup>
                    {error.email && <div className="error">{error.email}</div>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={form.password}
                      />
                    </CInputGroup>
                    {error.password && (
                      <div className="error">{error.password}</div>
                    )}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="warning" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-warning py-5"
                style={{ width: "100%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    {/* <Link to="/register">
                      <CButton color="warning" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
