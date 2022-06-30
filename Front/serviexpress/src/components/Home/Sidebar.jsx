import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { getPublications } from "../../redux/action";
import { RadioButtonsGroup2 } from "../Filters/Filters";
import SearchGroup from "../SearchGroup";
//import SwitchesGroup from '../Filters/switchprice';

const Sidebar = () => {
  const xDispatch = useDispatch();

  function handleRefresh(e) {
    e.preventDefault();
    // window.location.reload(e)
    xDispatch(getPublications());
  }

  return (
    <Fragment>
      
      <SearchGroup />
      {/* ////////////////////////////////////////// */}
      {window.location.href.includes("ome") ? (
        <Button
          variant="text"
          onClick={(e) => {
            handleRefresh(e);
          }}
          sx={{
            color: "black",
            fontSize: 12,
            marginBottom: "24px",
          }}
        >
          🧹(clean filter)
        </Button>
      ) : (
        true
      )}{/* <SwitchesGroup /> */}

      {/* ////////////////////////////////////////// */}

      <RadioButtonsGroup2 />

      {/* ////////////////////////////////////////// */}

      <RadioButtonsGroup2 />

    </Fragment>
  );
};

export default Sidebar;
