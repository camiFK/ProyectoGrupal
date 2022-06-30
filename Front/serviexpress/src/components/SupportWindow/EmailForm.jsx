import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";
import styled, { css } from "styled-components";
import "./Styles.scss";
import axios from "axios";

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const getOrCreateUser = async (pCallback) => {
    console.log(process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID);
    try {
      const rsp = await axios.put(
        "https://api.chatengine.io/users/",
        {
          username: email,
          secret: email,
          email: email,
        },
        {
          headers: {
            "PRIVATE-KEY": '01196a8a-83f0-4de6-80ee-df25c590ae95',
          },
        }
      );
      pCallback(rsp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrCreateChat = async (pCallback) => {
    try {
      const rsp = await axios.put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["JALZ DELEZ", email],
          title: "Support",
          is_direct_chat: true,
        },
        {
          headers: {
            "Project-ID": 'a937c2a4-688e-4dd6-be3e-018b9dff09fb',
            "User-Name": email,
            "User-Secret": email,
          },
        }
      );
      pCallback(rsp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    getOrCreateUser((user) => {
        props.pSetUser && props.pSetUser(user);
        getOrCreateChat((chat) => {
          setLoading(false);
          props.pSetChat && props.pSetChat(chat);
        });
      });
    }

  return (
    <MySection pVisible2={props.pVisible} loading={loading.toString()}>
      <div style={{ height: "0px" }}>
        <div className="fontTop" />
      </div>

      <CircularProgress
        className="transition-5"
        style={{
          zIndex: loading ? "10" : "-1",
          opacity: loading ? "1" : "0",
          position: "absolute",
          top: "calc(100% - 56%)",
          left: "calc(50% - 41px)",
        }}
      />

      <MySectionUnder>
        <Avatar
          alt="Remy Sharp"
          src="https://i.ibb.co/k93Gs5q/live-chat.png"
          sx={{
            width: 56,
            height: 56,
            margin: "9px",
            boxShadow: "0px 5px 25px 0px rgba(0,0,0,0.5)",
          }}
        />

        <div className="topText">
          Welcome to our <br /> support center.
        </div>

        <MyForm onSubmit={handleSubmit}>
          <input
            className="inp_email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </MyForm>

        <span className="bottomText">
          Enter your email <br /> to get started.
        </span>
      </MySectionUnder>
    </MySection>
  );
};

export default EmailForm;

const MySection = styled.section`
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 1;
  ${({ loading, pVisible2 }) => css`
    opacity: ${loading === "true" ? "0.7" : "1"};
    height: ${pVisible2 ? "100%" : "0%"};
  `}

  .fontTop {
    position: relative;
    top: -45px;
    width: 100%;
    height: 308px;
    background-color: #ffc107;
    transform: skewY(-12deg);
  }
`;

const MySectionUnder = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px;

  .topText {
    position: relative;
    width: 100%;
    color: white;
    font-size: 24px;
    font-weight: 600;
  }

  .bottomText {
    width: 100%;
    margin-top: 60px;
    color: #ffc107;
    font-size: 24px;
    font-weight: 600;
  }
`;

const MyForm = styled.form`
  position: relative;
  width: 100%;
  margin-top: 20px;

  .inp_email {
    width: 66%;
    text-align: center;
    outline: none;
    padding: 12px;
    border-radius: 12px;
    border: 2px solid #ffc107;
  }
`;
/* 

      <Avatar
        alt="Remy Sharp"
        src="https://i.ibb.co/nfPP3tS/OIP.jpg"
        sx={{ width: 56, height: 56, margin: "9px" }}
      />

*/
