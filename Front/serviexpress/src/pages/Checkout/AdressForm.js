import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import { Button, InputLabel } from '@mui/material';
import swal from 'sweetalert';
import { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postForm2} from '../../redux/action';

export default function AddressForm() {

  
  const check = /\S+/;
  const regExpr = /^[a-z]+$/i;
  
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({})
  
  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
  
  const me = useSelector(state => state.user)
  console.log(me.id)
  let myOrderSelected = JSON.parse(localStorage.getItem('order'))
  
  const validate = (input) => {
    let errors = { }
    if (!check.test(input.address) || !regExpr.test(input.address)) 
        errors.address = "This field is required."
    
    if (!check.test(input.city) || !regExpr.test(input.city)) 
        errors.city = "This field is required."
    
    if (!check.test(input.state) || !regExpr.test(input.state))
        errors.state = "This field is required."
  
    if (!check.test(input.country) || !regExpr.test(input.country))
        errors.country = "This field is required."

    return errors
  }


  const [input, setInput] = useState({
    budget_id: 0,
    publication: myOrderSelected.id,
    contract_date: '',
    user: me.id,
    address: '',
    country: '',
    state: '',
    city: '',
    postal_code: '',
    service_date: new Date(),
    time: '',
    status: ''
  }) 
  
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

function handleSubmit(e) {
  e.preventDefault();  
  setErrors(validate(input))
  if(input.address && input.city && input.state && input.country && input.postal_code && input.contract_date) { 
    dispatch(postForm2(input))
    console.log(input)
    swal({
      title: 'Completed',
      icon: 'success'
    })
    setInput({
      budget_id: 0,
      publication: '',
      contract_date: '',
      user: '',
      address: '',
      country: '',
      state: '',
      city: '',
      postal_code: '',
      service_date: new Date(),
      time: ''
    })
  }
}

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Service address
      </Typography>

      <form onSubmit={(e) => {handleSubmit(e)}} >

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        <TextField
          required
          id='address'
          fullWidth
          value={input.address}
          helperText={errors.address}
          onChange={(e) => { handleChange(e) }}
          name='address'
          label="Address"
          variant="standard"
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Date</InputLabel>
          <input
            required
            type="date"
            name="contract_date"
            value={input.contract_date}
            label="Contract day"
            onChange={(e) => { handleChange(e) }}
            />
         <Grid item xs={12} sm={6}>
            <InputLabel>Time</InputLabel>
            <input
            required
            name='time'
            type='time'
            value={input.time}
            onChange={(e) => { handleChange(e) }}
             />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>City</InputLabel>
          <Input
            type='text'
            required
            id="city"
            name="city"
            value={input.city}
            helperText={errors.city}
            label="City"
            fullWidth
            variant="standard"
            onChange={(e) => { handleChange(e) }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            value={input.state}
            helperText={errors.state}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) => { handleChange(e) }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Zip code:</InputLabel>
          <Input
            type='number'
            required
            id="zip"
            name="postal_code"
            value={input.postal_code}
            helperText={errors.postal_code}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => { handleChange(e) }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={input.country}
            helperText={errors.country}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => { handleChange(e) }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            />
        </Grid>
            <Button
             type="submit"
             variant="contained"
             color='success'
             sx={{ mt: 3, ml: 3 }}
            >Submit</Button>
      </Grid>
      </form>
    </React.Fragment>
  );
}
