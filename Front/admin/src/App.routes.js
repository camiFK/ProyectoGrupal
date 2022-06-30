import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import New from "./pages/New";
import { List, ListOfCategory, ListOfServices, Order } from "./pages/List";
import { aUserInputs, aProductInputs } from "./assets/sources/FormOne.js";
import "./styles/dark.scss";
import { useSelector } from "react-redux";
import Attendance from "./pages/Attendance";

function App() {
  const { rdcr_darkMode } = useSelector((state) => state);
  const session = window.localStorage.getItem("session");

  return (
    <div className={rdcr_darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          {session && <Route path="home" element={<Home />} />}
          <Route path="users">
            <Route index element={<List pType={"USER"} />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New pInputForm={aUserInputs} title={"User"} />}
            />
          </Route>
          <Route path="categories">
            <Route index element={<ListOfCategory pType={"CATEGORY"} />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="services">
            <Route index element={<ListOfServices />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="orders">
            <Route index element={<Order />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import { useContext, useState } from "react";
// import { DarkModeContext } from "./context/darkModeReducer";

/* 

function App() {

  const [dark, setDark] = useState(false);

  const {darkMode} = useContext(DarkModeContext);

  <Route path="new" element={<New inputs={aProductInputs} title={"Categorue"} />} />

*/
