import React from 'react'
import {MDBContainer} from "mdbreact";
import Styles from './Footer.module.scss'
import logos from '../../media/logos.png'

const FooterBar = () => {
  return (
    <footer className={Styles.footerctn}>
          <MDBContainer fluid>
          &copy; 2022 Copyright: ServiExpress 
         <img className={Styles.footerlogos} src={logos}/>
        </MDBContainer>
    </footer>
  )
}

export default FooterBar