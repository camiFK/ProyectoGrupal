import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { BsStarFill, BsStar } from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import {addToFavorites, getFavorites, removeFavorites} from "../../redux/action"
import { useDispatch, useSelector } from "react-redux";
import StylesCard from "./CardPublication.module.scss";


const CardPublications = ({ id, summary, album, title, price, userId }) => {
const dispatch = useDispatch()

const users = useSelector((state) => state.users);
const favorites = useSelector((state) => state.favorites)
const user = users.find((u)=>u.id===userId)
const userLogin = useSelector(state => state.user)
const rdcr_isAuth = useSelector(state => state.rdcr_isAuth)
const score = user.seller_reputation

const [checked, setChecked] = useState(false);
const [msgAlert, setMsg] = useState("");
const heartChange = (event) => {
  setChecked(event.target.checked);
};
const favClicked = () => {   
  if(checked) {
    dispatch(removeFavorites(userLogin.id,{id: id}));
    setMsg("Removed from favorites") 
  } 
  else {
    dispatch(addToFavorites(userLogin.id,{id: id}));
    setMsg("Added to favorites")
  }};
const scoreStar = [];
const scoreStarTotal = [];
const totalStar = 5-score;
  for (let i = 0; i < score; i++) {
    scoreStar.push(i);
  };
  for (let i = 0; i < totalStar; i++) {
    scoreStarTotal.push(i);
  };

  useEffect (()=>{
    if (rdcr_isAuth && favorites.publications)
      favorites.publications.filter((e)=>e.id===id).length > 0 ? setChecked(true) :  setChecked(false);
    else {
      setChecked(false);
    }
  },[favorites])

  return (
    <div className={StylesCard.comp_card_publication}>
      <div className={StylesCard.card}>
       

        <Link  to={`/Detail/${id}`}>
          <div className={StylesCard.cardimage}>
          
            <div>
             <Carousel fade>
               {album?.map((e,i) => {
                return <Carousel.Item key={i}>
                <img src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
    
          </div>
          </div>
          </Link>
          <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{title}</p>
            <div className={StylesCard.summary}>
            <p className={StylesCard.titlesummary}>{summary}</p>
            </div>
            <div className={StylesCard.cardstats}>
                    <div className={StylesCard.stat}>
                        {scoreStar?.map(e => <BsStarFill/>)}
                        {scoreStarTotal?.map(e => <BsStar/>)}
                    </div>
                </div>
            <div className={StylesCard.UL}>
            <div className={StylesCard.pricebox}>
            <p className={StylesCard.titleprice}>Starting at : USD {price} </p>
            </div>
            <div className={StylesCard.like}>
            {/* <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite />} /> */}
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}  checked={checked} icon={<FavoriteBorder />} onClick={favClicked} onChange={heartChange} disabled={!rdcr_isAuth} checkedIcon={<Favorite />} />
            </div>
           </div>
          </div>

          <div className={StylesCard.cardstats}></div>
        
      </div>
    </div>
  );
};

export default CardPublications