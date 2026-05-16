import React from "react";
import { text } from "../utils/translations";

export default function Footer({ lang }) {

  const t = text[lang] || text["en"];

  return (
    <footer className="footer">
      <div className="footer-container" 
      style={{height:"fit-content"}}>

        <div className="footer-section">
          <h3>{t.services}</h3>
          <ul>
            <a href="http://livestock-backend-8osq.onrender.com/animals" style={{display:"block",color:"lightblue",textDecoration:"none"}}>
              {t.animalHealth}
            </a>
            <a href="http://livestock-backend-8osq.onrender.com/vaccination" style={{display:"block",color:"lightblue",textDecoration:"none"}}>
              {t.breedManagement}
            </a>
            <a href="http://livestock-backend-8osq.onrender.com/milk" style={{display:"block",color:"lightblue",textDecoration:"none"}}>
              {t.milkProduction}
            </a>
            <a href="http://livestock-backend-8osq.onrender.com/expenses" style={{display:"block",color:"lightblue",textDecoration:"none"}}>
              {t.farmerSupport}
            </a>
          </ul>
        </div>

        <div className="footer-section">
          <h2>CattleCloud</h2>
          <p style={{fontSize:"20px"}}>
            {t.footerDesc}
          </p>
        </div>

        <div className="footer-section" style={{marginLeft:"auto"}}>
          <h3>{t.contact}</h3>
          <p style={{fontSize:"16px"}}>📧 {t.email}: saurabh1979mishra@gamil.com</p>
          <p style={{fontSize:"16px"}}>📞 {t.phone}: +91 9329792091</p>
          <p style={{fontSize:"16px"}}>🌐 {t.location}: {t.india}</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CattleCloud | {t.footerBottom}</p>
      </div>
    </footer>
  );
}