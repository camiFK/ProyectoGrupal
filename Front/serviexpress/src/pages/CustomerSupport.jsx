import React, { useState, useEffect, useRef } from "react";
import "./styles/CustomerSupport.scss";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ChatWindow from "../components/SupportWindow/ChatWindow";

const CustomerSupport = () => {
  const refOne = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (refOne.current && !refOne.current.contains(e.target)) {
        console.log("clicked outside");
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refOne]);

  return (
    <div className="page_customerSuport">
      <section>
        
      </section>
      <section className="customerSupport-chat">
        <section ref={refOne}>
          <ChatWindow visible={visible} />
        </section>

        <Tooltip title="Hi!!!, How can we help you?" placement="left">
          <Avatar
            onClick={() => setVisible(true)}
            alt="Remy Sharp"
            src="https://i.ibb.co/nfPP3tS/OIP.jpg"
            sx={{ width: 56, height: 56, margin: "9px" }}
          />
        </Tooltip>
      </section>
    </div>
  );
};

export default CustomerSupport;
/* 
useEffect(() => {
    const handleClickOutside = (e) => {
      if (refOne.current && !refOne.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refOne]); */
///////////////////////////////////////////////////
/* 

  useEffect(() => {
    const handleClick = (e) => {
      if (refOne.current && !refOne.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refOne]);
*/
/* 
3333333333333333

  const handleClickOutside = (e) => {
    console.log("handleClickOutside");
    if (refOne && !refOne.current.contains(e.target)) {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
*/
