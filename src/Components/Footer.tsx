import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="http://design.wonderflow.ai/get-started/symbols#facebook" target="_blank" rel="noopener noreferrer">
        <FacebookOutlined className="text-4xl" /> 
       
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <TwitterOutlined className="text-4xl" /> 
        
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <InstagramOutlined className="text-4xl" /> 
        
      </a>
    </footer>
  );
};

export default Footer;