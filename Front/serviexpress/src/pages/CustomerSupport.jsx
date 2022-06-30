import React, { useState, useEffect, useRef, Fragment } from "react";
import "./styles/CustomerSupport.scss";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ChatWindow from "../components/SupportWindow/ChatWindow";
import BurgerButton from "../components/NavBar/NavBar";

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
    <Fragment>
      <BurgerButton />

      {/* https://i.ibb.co/LZQShv3/call-center.jpg */}

      <main className="page_customerSuport-main">
        <section className="main-header">
          <figure className="main-header-figure">
            <img
              src="https://i.ibb.co/LZQShv3/call-center.jpg"
              alt="call-center"
              className="main-header-figure-img"
            />
            <article>
              <h1>WELCOME TO OUR CUSTOMER SERVICE</h1>
              <p>We are here to help you with any questions you may have.</p>
            </article>
          </figure>
        </section>

        <section className="main-body-attenance">
          <div className="page_customerSuport-header">
            <div className="customerSupport-chat">
              <section ref={refOne}>
                <ChatWindow visible={visible} />
              </section>
              <Tooltip title="Hi!!!, How can we help you?" placement="left">
                <Avatar
                  onClick={() => setVisible(true)}
                  alt="Remy Sharp"
                  src="https://i.ibb.co/k93Gs5q/live-chat.png"
                  sx={{ width: 46, height: 46, margin: "9px" }}
                />
              </Tooltip>
            </div>
            <div className="page_customerSuport-header-info">
              <h1 className="page_customerSuport-header-info-title">
                Customer Support
              </h1>
            </div>
          </div>
        </section>
 
      </main>
    </Fragment>
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
