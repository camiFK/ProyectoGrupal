// import styled from "styled-components";
import React from 'react'
import {filterCategories, getAllCategories, getPublicationsByCategory} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import stylefilter from "./Filter.module.scss"

const FilterByCategories = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const all = [{'id':0, name: 'All Categories'}]
  const allCategories = [...all,...useSelector((state) => state.categories)]

  useEffect(() => { 
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => { 
    console.log('use-effect',value)
    if (!allCategories[value]) dispatch(filterCategories('all'))
    else  dispatch(getPublicationsByCategory(allCategories[value].id))
  }, [value])

  function handleChange(event, newevent) {
    event.preventDefault();
    setValue(newevent);
  } 
  return (
    <Tabs className={stylefilter.tabs}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >

      {allCategories.map((e,index) => {
        return(
        <Tab 
          key={index}
          className={stylefilter.tab}
          label={e.name} />
        )
        })
      }
    </Tabs>
  )
}

export default FilterByCategories




