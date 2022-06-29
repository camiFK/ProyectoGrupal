
import SideBarProfile from "./SideBarProfile";
import Navbar from '../NavBar/NavBar'
import ProfileId from './ProfileId';
import styles from '../styles/ListProfile.module.scss';
import Chat from './Chat';
import Orders from './Orders';
import ReputationBuyer from "./ReputationBuyer";
import ReputationSeller from "./ReputationSeller";
import {getUser,getBudgets} from '../../redux/action';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';


export const ListProfile = () => {



    const dispatch = useDispatch();
    const user = useSelector(state => state.user);  
    const budgets = useSelector(state => state.budgetsId);


    useEffect(() => {
      dispatch(getUser());
      dispatch(getBudgets(user.id));


    },[dispatch,user.id])





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
            <ReputationBuyer></ReputationBuyer>
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

export const ListSellerReputation = () => {
  return <div>    
          <Navbar />
          <div className={styles.container}>
          <SideBarProfile></SideBarProfile>
          <ReputationSeller></ReputationSeller>
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
            <SideBarProfile ></SideBarProfile>
             <Chat id={user.id} ></Chat>
            </div>



    </div>


};

export const ListOrders = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);  
    const budgets = useSelector(state => state.budgetsId);


    useEffect(() => {
      dispatch(getUser());
      dispatch(getBudgets(user.id));


    },[dispatch,user.id])




    return <div>    
            <Navbar />
            <div className={styles.container}>
            <SideBarProfile></SideBarProfile>
            <Orders budgets={budgets}></Orders>
            </div>



    </div>


};


