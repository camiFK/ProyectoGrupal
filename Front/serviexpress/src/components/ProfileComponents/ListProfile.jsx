import SideBarProfile from "./SideBarProfile";
import Navbar from '../NavBar/NavBar'
import ProfileId from './ProfileId';
import styles from '../styles/ListProfile.module.scss';
import Chat from './Chat';
import Orders from './Orders';
import {getUser} from '../../redux/action';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

export const ListProfile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
      dispatch(getUser());

    },[dispatch])

    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            <ProfileId user={user}></ProfileId>
            </div>



    </div>


};

export const ListBuyerReputation = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            
            </div>



    </div>


};
export const ListBuyerNotifications = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            
            </div>



    </div>


};

export const ListSellerNotifications = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
           
            </div>



    </div>


};

export const ListSellerChats = () => {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
      dispatch(getUser());



    },[dispatch])


    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
             <Chat  id={user.id} ></Chat>
            </div>



    </div>


};

export const ListOrders = () => {
    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            <Orders></Orders>
            </div>



    </div>


};


