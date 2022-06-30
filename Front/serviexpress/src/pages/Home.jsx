import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getUsers,
  getPublications,
  swich_loading,
  getPublicationsByCategory,
  getAllCategories,
  getFavorites,
} from "../redux/action";
import CardPublications from "../components/CardPublications/CardPublications";
//import FilterByCategories from "../components/Filters/FilterByCategories";
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading.js";
import NavBar from "../components/NavBar/NavBar";
import ServicesBar from "../components/ServicesBar";
import Styles from "./styles/Home.module.scss";
import Carousel from "react-bootstrap/Carousel";
// import stylesDetail from "./styles/stylesDetail.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { flexbox } from "@mui/system";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import FooterBar from "../components/FooterBar/FooterBar";
import Sidebar from "../components/Home/Sidebar";
import {
  FilterByCategories,
  RadioButtonsGroup2,
} from "../components/Filters/Filters";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.Publications);
  const PublicationsCategory = useSelector(
    (state) => state.Publications_by_categories
  );
  const SwichL = useSelector((state) => state.switchloading);

  // console.log(SwichL);
  // console.log(allPublications);

  const [CurrentPage, setCurrentPage] = useState(1);
  const [PublicationsPerPage, setPublicationsPerPage] = useState(12);
  const indexOfLastPublication = CurrentPage * PublicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - PublicationsPerPage;
  let currentServices;
  if (allPublications.length > 0) {
    currentServices = allPublications?.slice(
      indexOfFirstPublication,
      indexOfLastPublication
    );
  } else {
    currentServices = [];
  }
  const { user, errorLogin, rdcr_isAuth } = useSelector((state) => state);
  const [msgSearch, SetMsgSearch] = useState("");
  const sendLogin = window.localStorage.getItem("sendLogin");
  const session = window.localStorage.getItem("session");
  const msg = (text) => {
    SetMsgSearch(text);
  };

  // const [order,setorder] = useState ("")
  // const [orderscore , setorderscore] = useState(1)
  // const servicescreate = [];
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getUsers());
    if (!Object.keys(user).length && sendLogin) {
      dispatch(getUser());
      window.localStorage.removeItem("sendLogin");
      navigate("/login");
    }

    if (session && !errorLogin && rdcr_isAuth) {
      swal("Inicio de sesión", "Inicio de sesión correcto!", "success");
      window.localStorage.removeItem("session");
    }

    dispatch(getAllCategories());
    dispatch(getFavorites(user.id));
    setTimeout(() => {
      dispatch(getPublications());
    }, 1000);
  }, [dispatch, errorLogin, navigate, sendLogin, rdcr_isAuth, user, session]);

  useEffect(() => {
    setCurrentPage((pag) => (pag = 1));
  }, [allPublications]);

  useEffect(() => {
    setTimeout(() => {
      if (allPublications.length === 0 && PublicationsCategory.length !== 0)
        swal({
          icon: "error",
          text: "Sorry! There are no publications yet.",
        });
    }, 1000);
  }, [allPublications]);

  return (
    <Fragment>
      <NavBar msg={msg}></NavBar>

      <div className={Styles.filtercategories}>
        <FilterByCategories />
      </div>

      {msgSearch && (
        <Alert
          severity="error"
          sx={{ fontSize: 16, display: flexbox, justifyContent: "center" }}
        >
          {msgSearch}
        </Alert>
      )}

      <main className={Styles.Home_Main}>
        {/* <FilterByCategories /> */}

        <div className={Styles.Home_Main_Content}>
          <section className={Styles.MainSidebar}>
            <Sidebar />
          </section>

          <section className={Styles.MainCards}>
            <div className={Styles.homepaginate}>
              <Pagination
                value={allPublications.length}
                pagination={pagination}
                items={PublicationsPerPage}
                pages={Math.ceil(allPublications.length / PublicationsPerPage)}
              />
            </div>

            {allPublications.length > 0 ? (
              <section className={Styles.serviceshome}>
                {currentServices?.map((e, i) => {
                  return (
                    <div>
                      <CardPublications
                        key={i}
                        id={e.id}
                        album={e.album}
                        title={e.title}
                        summary={e.detail_resume}
                        userId={e.userId}
                        price={e.price}
                      />
                    </div>
                  );
                })}
              </section>
            ) : (
              <CircularProgress sx={{ margin: "30vh 40vw" }} />
            )}
          </section>
        </div>
      </main>

      <FooterBar />
    </Fragment>
  );
}
