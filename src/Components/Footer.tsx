import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-400">
      <div className="flex justify-between items-center h-12 border-5 p-0 mx-10 md:mx-20">
        <div className="flex items-center">
          <img className="hidden md:block h-12 w-24 rounded-md " src={Logo} alt="" />
        </div>

        <div className="text-center text-black flex-grow">
          &copy; 2023 O'Comics
        </div>

        <div className="flex space-x-2">
          <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
            <FacebookOutlined className="text-4xl" /> 
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer " className="hover:animate-bounce">
            <TwitterOutlined className="text-4xl" /> 
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
            <InstagramOutlined className="text-4xl" /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
