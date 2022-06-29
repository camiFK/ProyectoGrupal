import stylesCardSeller from '../pages/styles/stylesCardSeller.module.scss';
import star from '../assets/icons/star.png';
/* import {Modal,Button} from 'react-bootstrap'; */
import {useState} from 'react';
import {Modal} from '@mui/material';
import ContactCard from './ContactCard';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getUserById } from '../redux/action';
import swal from 'sweetalert';
import Button from '@mui/material/Button';

export default function CardSellerDetail({userid, userLogin }){

    const [show,setShow] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (userLogin.id) setShow(true);
        else {
          swal({
            title: "Error",
            text: "You are not logged in",
            icon: "error",
            button: "Accept"
  
  
          })
        }

    };


    const dispatch = useDispatch();
    const user = useSelector(state => state.userId);


    useEffect(() => {
        dispatch(getUserById(userid));
    },[dispatch,userid]);


    return <div className={stylesCardSeller.containerCard}>
        <h3>About Seller</h3>
        <img src={user.avatar_image} alt="perfil"></img>
        <h2 className={stylesCardSeller.name}>{user.name +" "+ user.last_name}</h2>
        <h4>Location: {user.location}</h4>
        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>{user.buyer_reputation}</label>
            </div>
            <label>({user.buyer_opinions.length} Opinions)</label>
        </div>

        <p className={stylesCardSeller.descrip}>{user.description}</p>

        <Button variant='outlined' color="primary" onClick={handleShow} >Contact</Button>;
        


        
{/*         <Modal show={show} onHide={handleClose} className={stylesCardSeller.contact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ContactCard name="Electrician20" perfil="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20="></ContactCard>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
 */}


      <Modal
  open={show}
  onClose={handleClose}
  className={stylesCardSeller.modal}
>


 <ContactCard name={user.name} perfil={user.avatar_image} id_seller={user.id} handleClose={handleClose} ></ContactCard>
 

</Modal>












    </div>


};