import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/MyOrder.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import FeedIcon from "@mui/icons-material/Feed";
import { Box } from '@mui/material';
import { getMyOrders, postReview } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const MyOrders = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orderid, setOrderId] = useState();

  useEffect(() => {
    dispatch(getMyOrders())
  }, [dispatch]);
 
  const myorders = useSelector(state => state.orders);
  console.log(myorders)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'service',
      headerName: 'SERVICE',
      width: 280,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      width: 120,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'STATUS',
      sortable: true,
      width: 150,
    },
  ];

  const actionColumn = [
    {
      field: "review",
      headerName: "REVIEW",
      width: 120,
      renderCell: (params) => {
        return (
          <div >
        <Button 
        variant="contained" 
        color="success"  
        onClick={() => handleClick(params.row.id)}>
        Submit a review
        </Button>    
          </div>
        );
      },
    },
  ];

  
  const rows = myorders?.map(order => {
    return {
      id: order.id,
      price: order.publication.price,
      service: order.publication.title,
      status: order.status
    }
  }) 

  const handleClick = (id) => {
    setOrderId(id)
    console.log(id)
    navigate(`/review/` + id)
  }

  return (
    <div className={Styles.container}>
        <BurgerButton />

      <div className={Styles.grid}>
        <h1 className={Styles.title}>My orders: </h1>
   
         <div style={{ height: 400, width: '55%' }}>
           <DataGrid    
            showCellRightBorder
            showColumnRightBorder
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[3]}
           />
      </div>
    
        </div>

        <FooterBar />
    </div>
  )
}

export default MyOrders