import React from "react";
import BurgerButton from "../components/NavBar/NavBar";
import "./styles/Seller.scss";
import { MyButton } from "../elements/Forms";
import { Link } from "react-router-dom";
import RctBoostCarousel from "../components/Carousel.jsx";
import Footer from "../components/Footer";
import { Animated } from "react-animated-css";

const URL = require("./../assets/icons/contrato.png");
const URL2 = require("./../assets/icons/send.png");
const URL3 = require("./../assets/icons/pay.png");

const Seller = () => {
  return (
    <div className="page-seller">
      <BurgerButton />
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <figure className="seller-one">
          <img
            src="https://i.ibb.co/CmYp4Cq/bg-mobile-first-hero-x2.jpg"
            alt=""
          />
          <article>
            <h2>Work Your Way You bring the skill. We'll make earning easy</h2>
            <MyButton sx={{ color: "black", fontWeight: "bold" }}>
              {/* <Link to="/seller/register">Registrarse</Link> */}
              More Information
            </MyButton>
          </article>
        </figure>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <aside className="seller-two">
          <ol>
            <li>
              "A Gig is Bought Every" <br />
              <strong>4 sec</strong>
            </li>
            <li>
              "Transactions" <br />
              <strong>50M+</strong>
            </li>
            <li>
              "Price Range" <br />
              <strong>$5 - $10,000</strong>
            </li>
          </ol>
        </aside>
      </Animated>
      <Animated animationIn="jello" animationOut="swing" isVisible={true}>
        <section className="seller-three">
          <RctBoostCarousel />
        </section>
      </Animated>
      <Animated animationIn="flash" animationOut="pulse" isVisible={true}>
        <article className="seller-four">
          <h1>How it works</h1>
          <ul>
            <li>
              <img src={URL} alt="" />
              <h3>1. Create a Gig</h3>
              <p>
                Sign up for free, set up your Gig, and offer your work to our
                global audience.
              </p>
            </li>
            <li>
              <img src={URL2} alt="" />
              <h3>2. Deliver great work</h3>
              <p>
                Get notified when you get an order and use our system to discuss
                details with customers.
              </p>
            </li>
            <li>
              <img src={URL3} alt="" />
              <h3>
                <p>
                  Get paid on time, every time. Payment is transferred to you
                  upon order completion.
                </p>
              </h3>
            </li>
          </ul>
        </article>
      </Animated>
      <Footer />
    </div>
  );
};

export default Seller;
