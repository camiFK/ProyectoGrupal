import React from "react";
import {
  filterCategories,
  getAllCategories,
  getPublicationsByCategory,
} from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import stylefilter from "./Filter.module.scss";
import { filterprice } from "../../redux/action";

function RadioButtonsGroup2() {
  const categories = useSelector((state) => state.Publications_by_categories);
  const [value, setValue] = useState("female");
  const dispatch = useDispatch();
  const handleChanges = (event) => {
    setValue(event.target.value);
    dispatch(filterprice(event.target.value));
  };

  return categories.length > 0 ? (
    <div className={stylefilter.box_filter}>
      <p>Select Range Price</p>
      <select
        className={stylefilter.selectcss}
        onChange={(e) => handleChanges(e)}
      >
        <option key="all" value="all">
          All
        </option>
        <option key="range1" value="range1">
          0 to 500.
        </option>
        <option key="range2" value="range2">
          500 to 2000
        </option>
        <option key="range3" value="range3">
          2000 to 4000
        </option>
        <option key="range4" value="range4">
          more than 4000
        </option>
      </select>
    </div>
  ) : (
    <div></div>
  );
}

const FilterByCategories = () => {
  const dispatch = useDispatch();

  const all = [{ id: 0, name: "All Categories" }];
  const allCategories = [...all, ...useSelector((state) => state.categories)];
  const [value, setValue] = useState();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!allCategories[value]) dispatch(filterCategories("all"));
    else dispatch(getPublicationsByCategory(allCategories[value].id));
  }, [value]);

  function handleChange(event, newevent) {
    event.preventDefault();
    setValue(newevent);
  }

  return (
    
    <Tabs className={stylefilter.tabsf}
      variant="scrollable"
      value={value?value:0}
      onChange={handleChange}
      scrollButtons="auto"
    >
      {allCategories.map((e, index) => {
        return (
          <Tab
            className={stylefilter.tabf}
            scrollButtons="auto"
            label={e.name}
          />
        );
      })}
    </Tabs>
  );
};

//----------------------------------------------------------------
//Filter by Price

export { FilterByCategories, RadioButtonsGroup2 };
