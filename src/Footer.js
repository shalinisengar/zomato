import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import ReactCountryFlag from "react-country-flag"
import img from './images.png'
// import img from './images.jpng'
// import img1 from './images1.png'
import { TbWorld } from "react-icons/tb";


const Footer = () => {
  return (
    <div className="" style={{backgroundColor:'#ECEFF0' ,paddingTop:2,marginTop:20}}>
      <div className="container-sm w-75 mt-40 ">
        <div className="mt-5 d-flex justify-content-between align-item-center">
          <div>
            <img
              style={{ width: "8rem", height: 25 }}
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            />
          </div>
          <div className="button2">
            <button>
             <ReactCountryFlag countryCode="IN" svg />   India </button>
            <button><TbWorld/>   English</button>
          </div>
        </div>
        <div className="text1 mt-4 d-flex  justify-content-between align-item-center">
          <div className="ml-4">
            <h6 className="m-2">ABOUT ZOMATO</h6>
            <p className="m-1 "style={{color: "gray"}}>Who We Are</p>
            <p className="m-1" style={{color: "gray"}}>Blog</p>
            <p className="m-1"style={{color: "gray"}}>Work With Us</p>
            <p className="m-1"style={{color: "gray"}}>Investor Relations</p>
            <p className="m-1"style={{color: "gray"}}>Report Fraud</p>
            <p className="m-1"style={{color: "gray"}}>Press Kit</p>
            <p className="m-1"style={{color: "gray"}}>Contact Us</p>
          </div>
          <div>
            <h6 className="m-1 2">ZOMAVERSE</h6>
            <p className="m-1" style={{color: "gray"}}>Zomato</p>
            <p className="m-1" style={{color: "gray"}}>Blinkit</p>
            <p className="m-1" style={{color: "gray"}}>Feeding India</p>
            <p className="m-1"style={{color: "gray"}}>Hyperpure</p>
            <p className="m-1"style={{color: "gray"}}>Zomaland</p>
          </div>
          <div>
            <h6>FOR RESTAURANTS</h6> <p className="m-1" style={{color: "gray"}}>Partner With Us</p > <p className="mb-4"style={{color: "gray"}}>Apps For You</p>
            <h6 >FOR ENTERPRISES</h6>
            <p className="m-1" style={{color: "gray"}}>Zomato For Enterprise</p>
          </div>
          <div>
            <h6>LEARN MORE</h6> <p className="m-1"style={{color: "gray"}}>Privacy</p> <p className="m-1"style={{color: "gray"}}>Security</p>
            <p className="m-1"style={{color: "gray"}}>Terms</p>
            <p className="m-1"style={{color: "gray"}}>Sitemap</p>
          </div>
          <div>
            
            <h6>SOCIAL LINKS</h6>
            <div className="icon">
            <a className="a"><RiInstagramFill/></a>
             <a className="a"><FaLinkedin /> </a>
             <a className="a"><FaTwitter /></a>
            <a className="a"><GrYoutube /></a>
            <a className="a"><FaFacebookSquare /></a><br/>
            </div>
            <img className="mt-3 " style={{width:140 ,height:90}} src={img}/><br/>
            {/* <img className="mt-2 " style={{width:165 ,height:60}} src={img1}/> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
