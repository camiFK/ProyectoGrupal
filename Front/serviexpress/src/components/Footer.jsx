import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const logo = require("../assets/icons/log.png");

const Footer = () => {
  return (
    <MyFooter>
      <section className="footer-one">
        <section className="fOne-log">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <a
            href="https://github.com/camiFK/ProyectoGrupal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "black" }}>
              <GitHubIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </a>
        </section>
        <section className="fOne-claims">
          <a href="/support" target="_blank" rel="noopener noreferrer">
            <span>
              <IconButton sx={{ color: "black" }}>
                <SupportAgentIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <strong>Support Agent</strong>
            </span>
          </a>
        </section>
      </section>
      <section className="footer-two">
        <article className="two-iformation">
          <h2>ServiExpress</h2>
          <p>
            ServiExpress is a platform that allows you to find the best
            professionals in the area.
          </p>
          <a href="/seller">
            <u>More Information</u>
          </a>
        </article>
        <article className="tow-about">
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="#!">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </article>
      </section>
      <h4>© 2022 Copyright: ServiExpress</h4>
    </MyFooter>
  );
};

export default Footer;

const MyFooter = styled.footer`
  width: 100%;
  display: flex;
  background-color: #fcdc3c;
  flex-direction: column;
  .footer-one {
    display: flex;
    .fOne-log {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 30px 0;
      figure {
        margin: 0;
        img {
          width: 100px;
        }
      }
    }
    .fOne-claims {
      width: 50%;
      a {
        color: black;
      }
      display: flex;
      justify-content: end;
      text-align: end;
      padding-right: 30px;
      align-items: center;
    }
  }
  .footer-two {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    .two-iformation {
      width: 50%;
      padding-right: 12px;
    }
    .tow-about {
      gap: 10px;
      h2 {
        text-align: right;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 12px;
        justify-content: end;

        a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
  h4 {
    margin: 12px 0 0;
    text-align: center;
    font-size: 12px;
    color: white;
    font-weight: bold;
    width: 100%;
    background-color: black;
  }
  //media to table
  @media (max-width: 768px) {
    .footer-two {
      flex-direction: column;
      .two-iformation {
        width: 100%;
      }
    }
  }
  //media to mobile
  @media (max-width: 376px) {
    .footer-one {
      .fOne-log {
        flex-direction: column;
      }
      .fOne-claims {
        width: 100%;
        justify-content: center;
        text-align: center;
        padding: 0;
      }
    }
  }
`;
