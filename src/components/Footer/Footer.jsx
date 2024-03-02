import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col">
          <h4>LOGO</h4>
          <ul>
            <li>
              <Link to="https://www.linkedin.com/in/rudra1410/">
                This is a React E-commerce Web App created using React and Redux
                to perform cart functionality created by Rudra Gupta.
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li>
              <Link to="/coming-soon">FAQ</Link>
            </li>
            <li>
              <Link to="/coming-soon">Shipping</Link>
            </li>
            <li>
              <Link to="/coming-soon">Returns</Link>
            </li>
            <li>
              <Link to="/coming-soon">Order Status</Link>
            </li>
            <li>
              <Link to="/coming-soon">Payment Options</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/coming-soon">About Us</Link>
            </li>
            <li>
              <Link to="/coming-soon">Our Services</Link>
            </li>
            <li>
              <Link to="/coming-soon">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/coming-soon">Visit Website</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Social Profiles</h4>
          <div className="social-links">
            <Link
              to="https://www.linkedin.com/in/rudra1410/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </Link>
            <Link
              to="https://github.com/rudrag1410"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.instagram.com/_rudra._14/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
