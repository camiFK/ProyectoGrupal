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
import {getById,getUserById,getUsers,addToFavorites,getFavorites,removeFavorites} from '../redux/action.js';
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {MDBContainer} from "mdbreact";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export default function Detail(){
    const {id} = useParams();

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);
    const moreUsers = useSelector(state => state.users);
    const favorites = useSelector(state => state.favorites);


    useEffect(() => {
        dispatch(getById(id));
        dispatch(getUserById(detail.userId));
        dispatch(getUsers());
        dispatch(getFavorites(detail.userId));

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

    const favClicked = () => {

       favorites.publications.forEach(e => {
        dispatch(removeFavorites(detail.userId,{id: id})); 
        if(e.id === parseInt(id)) { 
         
          
        }
       });
       //dispatch(getFavorites);
     
       //dispatch(addToFavorites(detail.userId, {id: id}));

      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;

      }

      setOpen(false);
    };
    
    //console.log(favorites,detail.userId);
    
    return <div className={stylesDetail.container}>
        <NavBar></NavBar>
          <div>
         {/*    <ServicesBar></ServicesBar> */}
          </div>

          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="info" sx={{ width: '100%' , fontSize: 12}}>
            Added to Favorites
         </Alert>
         </Snackbar>


        <div className={stylesDetail.division}>
        <div className={stylesDetail.leftSide}>
          <div>
          <Breadcrumb className={stylesDetail.anchors} >
          <Breadcrumb.Item href="/" >Principal</Breadcrumb.Item>
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
                <label>Publicado el:</label>
               <p> {detail.date}</p>



           </div>

          <div>
              
              <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} {...label} icon={<FavoriteBorder />} onClick={favClicked} checkedIcon={<Favorite />} />
          </div>
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

                )


             })}
            </Carousel>

        </div>



        <div className={stylesDetail.opinion} >
          <ProfileOpinion userid={detail.userId}></ProfileOpinion>

        </div>
       
    </div>
    <CardSellerDetail userid={detail.userId}></CardSellerDetail>

    </div>
     <Footer></Footer>


     <div className={stylesDetail.footer}>
        <MDBContainer fluid>
          &copy; 2022 Copyright: ServiExpress 
        </MDBContainer>
      </div>
    </div>

   
};