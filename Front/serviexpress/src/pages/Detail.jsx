import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';
import CardSellerDetail from '../components/CardSellerDetail';
import CardOthersServices from '../components/CardOthersServices';
import ProfileOpinion from '../components/ProfileOpinion';
import Footer from '../components/FooterDetail';
import NavBar from '../components/NavBar/NavBar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import ServicesBar from '../components/ServicesBar';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {getById,getUserById,getUsers,addToFavorites,getFavorites,removeFavorites,getUser } from '../redux/action.js';
import { useParams,Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {MDBContainer} from "mdbreact";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MercadoPago from '../components/MercadoPago';
import {Modal} from '@mui/material';
import Payment from '../components/Payment';
import swal from 'sweetalert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FooterBar from "../components/FooterBar/FooterBar";

export default function Detail(){
    const {id} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const detail = useSelector(state => state.detail);
    const moreUsers = useSelector(state => state.users);
    const fav = useSelector(state => state.favorites);
    const userLogin = useSelector(state => state.user)
    const favCheck = useSelector(state => state.favorite_check);

  const [checked, setChecked] = useState(false);


  const heart = () => {
    fav.publications && fav.publications.forEach(e => {
        
        if(e.id === parseInt(id)) {
          setChecked(true);
        }

      })

  };
   



    useEffect(() => {
        dispatch(getById(id));
        dispatch(getUserById(detail.userId));
        dispatch(getUsers());
        dispatch(getFavorites(detail.userId));
        dispatch(getUser());
        
        heart();


    },[dispatch,id,detail.userId]);


  const [text,setText] = useState();


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
    const handleClick = (e) => {
        e.preventDefault();
        setText(detail.detail);
        document.getElementById("btnVerMas").style.display = 'none';

    };
   
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = useState(false);

    const [msgAlert, setMsg] = useState("");

    const favClicked = () => {   
        if(checked) {
          dispatch(removeFavorites(userLogin.id,{id: detail.id}));
          setMsg("Removed from favorites")
        } 
        else {
          dispatch(addToFavorites(userLogin.id,{id: detail.id}));
          setMsg("Added to favorites")
        }


       
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;

      }

      setOpen(false);
    };
    
    

    const heartChange = (event) => {
      setChecked(event.target.checked);
    };
    

    const [show,setShow] = useState();

    const handleCloseModal = () => setShow(false);
    const handleShow = () => setShow(true);

    // Esta funcion es la que agrega la orden al carrito de compras, utilizando toda la informacion de la publicacion
    function handleAddToOrder() {
      localStorage.setItem("order",JSON.stringify(detail));
      let myOrder = localStorage.getItem("order");
      swal({
        title: "Added to order",
        icon: "success",
        timer: 2000,
      })
      navigate('/checkout');
    }

   
    return <div className={stylesDetail.container}>
        <NavBar aux={true}></NavBar>
          <div>
         {/*    <ServicesBar></ServicesBar> */}
          </div>

          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="info" sx={{ width: '100%' , fontSize: 12}}>
            {msgAlert}
         </Alert>
         </Snackbar>


        <div className={stylesDetail.division}>
        <div className={stylesDetail.leftSide}>
          <div>
          <Breadcrumb className={stylesDetail.anchors} >
          <Breadcrumb.Item href="/" >Main</Breadcrumb.Item>
          <Breadcrumb.Item href="/home">
          Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{detail.title}</Breadcrumb.Item>
          </Breadcrumb>

          </div>
          <div className={stylesDetail.title}>
                <p>{detail.title}</p>
          </div>  

          <div className={stylesDetail.subTitle}>
           <div className={stylesDetail.date}>
                <label>Published on:</label>
               <p> {detail.date}</p>

           </div>

          {userLogin.id ? <div>      
          <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}  icon={<ShoppingCartIcon/>} onClick={handleAddToOrder} />
              <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} {...label} checked={checked} icon={<FavoriteBorder />} onClick={favClicked} onChange={heartChange} checkedIcon={<Favorite />} />
          </div> 
            : null
          }
        </div>

        <div className={stylesDetail.carousel}>
     <Carousel fade>
        {detail.album.map(e => {
            return <Carousel.Item>
            <img className="d-block w-100" src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
       <div className={stylesDetail.price}><p>Price: </p>
       <div> ${detail.price} </div>
       
       </div>
       

    </div>


        <Modal
           open={show}
           onClose={handleCloseModal}
           className={stylesDetail.modal}
          >

           <Payment price={detail.price} usremail={userLogin.email} album={detail.album} title={detail.title} idPublicacion={id} idBuyer={userLogin.id}></Payment>


        </Modal>



        <div className={stylesDetail.about}>
        <h3>About Services</h3>
          <p>{detail.detail_resume}</p>
          <p></p>
          <p>{text}</p>

            <button id='btnVerMas' className={stylesDetail.more} onClick={handleClick}>Ver Mas</button>
        </div>

         <h2>We Recommend Also...</h2>
          <div className={stylesDetail.cardOthers}>
 
             <Carousel>
             {moreUsers.map(e => {
                return (     
                  <Carousel.Item>
                  <CardOthersServices user={e}></CardOthersServices>   
                  </Carousel.Item>
                )})}
            </Carousel>

        </div>

        <div className={stylesDetail.opinion} >
          <ProfileOpinion userid={detail.userId}></ProfileOpinion>
        </div>
       
        </div>
          <CardSellerDetail userid={detail.userId} userLogin={userLogin}></CardSellerDetail>
        </div>

     <Footer></Footer>

     <FooterBar/>
     {/* <div className={stylesDetail.footer}>
        <MDBContainer fluid>
          &copy; 2022 Copyright: ServiExpress 
        </MDBContainer>
      </div> */}
    </div>

   
};