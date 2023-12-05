import React from 'react';
import logo from "../../assets/Images/logo hh.png"
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-orange-100 text-black opacity-80">
  <aside>
    <img  className="inline-block fill-current w-1/2" src={logo} alt="" />
    <p className="font-bold">
      HH Industries Ltd. <br/>Providing sweet and natural honey since 1992
    </p> 
    <p>Copyright © Joyee Chakraborty - All right reserved </p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4 ">
    <a  href="https://github.com/ck-joyee">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joyee-chakraborty-8b5b50229">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/joyee.chakraborty.9822?mibextid=ZbWKwL">
                <FaFacebook />
              </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
