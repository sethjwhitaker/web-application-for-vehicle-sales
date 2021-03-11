import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer-basic">
        <footer>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">CSCI 441 Dealership © 2021</p>
        </footer>
    </div>
  );
}

export default Footer;