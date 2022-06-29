import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {filterprice} from "../../redux/action"
import Styles from "./switchPrice.module.scss";
import { useDispatch } from "react-redux";
export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(filterprice(event.target.value))
  };

  return (
    <FormControl component="fieldset">
      <p  className={Styles.titlefilter}>Filter for price</p>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="range1" control={<Radio />} label="0 to 500" />
        <FormControlLabel value="range2" control={<Radio />} label="500 to 2000" />
        <FormControlLabel value="range3" control={<Radio />} label="2000 to 4000" />
        <FormControlLabel value="range4" control={<Radio />} label="greater than 4000" />
      </RadioGroup>
    </FormControl>
  );
}