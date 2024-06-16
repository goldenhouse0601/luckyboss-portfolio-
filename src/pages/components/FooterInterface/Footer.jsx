import React from 'react';
import BottomNav from './BottomNav';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div className="footer_section dark">
        <BottomNav />
        <div className="line"></div>
        <h2>Made with 😎 by LuckyBoss</h2>
      </div>
    </div>
  );
};

export default Footer;
