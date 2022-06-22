import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser,getUsers, getPublications, swich_loading, getPublicationsByCategory,getAllCategories} from "../redux/action";
import CardPublications from "../components/CardPublications/CardPublications";
import FilterByCategories from "../components/Filters/FilterByCategories";
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading.js";
import NavBar from "../components/NavBar/NavBar";
import ServicesBar from "../components/ServicesBar";
import Styles from "./styles/Home.module.scss";
import PaginationHome from "../components/PaginationHome";
import Carousel from "react-bootstrap/Carousel";
import stylesDetail from "./styles/stylesDetail.module.scss";
import Alert from "@mui/material/Alert";
import { flexbox } from "@mui/system";

export default function Home() {
  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.Publications);
  const SwichL = useSelector((state) => state.switchloading);
  console.log(SwichL);
  console.log(allPublications);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PublicationsPerPage, setPublicationsPerPage] = useState(12);
  const indexOfLastPublication = CurrentPage * PublicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - PublicationsPerPage;
  const currentServices = allPublications.slice(indexOfFirstPublication,indexOfLastPublication,);

  const [msgSearch, SetMsgSearch] = useState("");

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
    dispatch(getUser());
    dispatch(getUsers());
    dispatch(getAllCategories());
    setTimeout(() => {
      dispatch(getPublications());
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage((pag) => (pag = 1));
  }, [allPublications]);

  // function filterforCategory1() {dispatch(getPublicationsByCategory(1))}

  return (
    <div className={Styles.container}>
      <NavBar msg={msg}></NavBar>
      {msgSearch && (
        <Alert
          severity="error"
          sx={{ fontSize: 16, display: flexbox, justifyContent: "center" }}
        >
          {msgSearch}
        </Alert>
      )}

      {/* <div className="filterservice">
        <p onClick={filterforCategory1} className="filtername"> Plumbing </p>
        <p className="filtername">|</p> */}

        < FilterByCategories />

      <div className={Styles.homepaginate}>
        <PaginationHome
          value={allPublications.length}
          pagination={pagination}
          items={PublicationsPerPage}
        ></PaginationHome>
      </div>

      <div className={Styles.serviceshome}>
        {SwichL === true || allPublications.length === 0 ? (
          <Loading></Loading>
        ) : (
          currentServices.map((e) => {
            return (
              <div>
                <CardPublications
                  id={e.id}
                  album={e.album}
                  title={e.title}
                  summary={e.detail_resume}
                  userId={e.userId}
                  price={e.price}
                  // opinions= {e.opinions}
                />
              </div>
            );
          })
        )}
      </div>

      {/* <div className="paginationHome">
        <PaginationHome
          value={allPublications.length}
          pagination={pagination}
          items={PublicationsPerPage}
        ></PaginationHome>
      </div> */}

      <div className="logos"></div>
    </div>
  );
}
