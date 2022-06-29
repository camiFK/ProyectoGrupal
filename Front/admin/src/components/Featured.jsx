import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularStatic from './sub components/progressbar'
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { getContractsPercentage, getTodayPayments} from '../redux/action.js'

const Featured = () => {
  const {orders_percentage, payments_today_length, payments_today_amount} = useSelector((state) => state)  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContractsPercentage());
    dispatch(getTodayPayments("length"));
    dispatch(getTodayPayments("amount"));
  },[dispatch])

  
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Transactions statistics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularStatic value={orders_percentage} text={`Completed \n contracts`}/>
        </div>
        <p className="title">Total payments registered</p>
        <p className="amount">{payments_today_length}</p>
        <p className="title">Total money managed</p>
        <p className="amount">{`$ ${payments_today_amount}`}</p>
        {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
