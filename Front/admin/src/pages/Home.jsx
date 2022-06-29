import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "./styles/Home.scss";
import Widget from "./Widget";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="categories" />
          <Widget type="services" />
          <Widget type="orders" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Years (Publications)" aspect={2/1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Registered Contracts</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Home;
