import {Elements , PaymentElement, useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import {Button, getBottomNavigationUtilityClass} from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import styles from '../pages/styles/payment.module.scss'

import {useDispatch,useSelector} from 'react-redux';
import {getById,getStripe} from '../redux/action'
import swal from "sweetalert";


//KEY BETO
//const stripePromise = loadStripe("pk_test_51LBPk1GoLNm66v6I6TssTnj84pvURPEw0RXArNJQlyhp9xzucaT6VN1PMpZaxyTL5LxoOgyxcjE9lNaGH7ajQ0Gl00OcucorEr");


//KEY LEO
const stripePromise = loadStripe("pk_test_51LBNJbA25r7eed2bkcHZIzmLbouFZsUM9b19WawYn5tGP726sLszup0jpaMqFoJxwZ1lwuZxjtlOmTh39hrBsQzk00kZiUQf6V")


export default function Payment({price,usremail,title,album,idBuyer,idPublicacion}){
    const dispatch = useDispatch();
    const publication = useSelector(state => state.detail);
    const dataStripe = useSelector(state => state.stripe);

    const FormCreate = () => {
        const stripe = useStripe();
        const elements = useElements();

        const navigate = useNavigate();

        
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            const {error,paymentMethod} =  await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });
        
            if(error) {
                console.log(error);
                swal("error", "Error", "error");
            }

            else {
                const {id} = paymentMethod;
                swal("Wait...", "Confirming transaction...", "info")
                //const r = await dispatch(getStripe(id,price,usremail,idBuyer,idPublicacion));
                const { data } = await axios.post("/payments", {
                    stripeid:id,
                    amount:price,
                    usremail,
                    idBuyer,
                    idPublicacion
                  });
                if(data.status === 'succeeded') { 
                    swal("Success", "Service Purchased", "success")
                     .then((value)=>{
                        navigate("/home", { replace: true })
                     })
                }
                else if(data.status === 'rejected') {
                     swal("Error", data.id ,"error") 
                     .then((value)=>{
                        navigate("/home", { replace: true })
                     })
                }
            }
        };
    
    
        return  <form className={styles.form}>
                <CardElement />
                <Button variant="contained" onClick={handleSubmit} >Send</Button>
                </form>
        
    }

   
    return <div className={styles.container}>
    <Elements stripe={stripePromise} >
        <h3>{title}</h3>
        <div className={styles.image}>
        <img src={album[0]} alt="perfil"></img>
        </div>
        <p>${publication.price}</p>
        <div>
            <FormCreate className={styles.form}></FormCreate>
        </div>
    </Elements>
    </div> 
};