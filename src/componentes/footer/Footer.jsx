import './Footer.css';
import Logo from '../../assets/logo.png';
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section id="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-box1">
                    <img src={Logo} alt="" />
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className="footer-icon">
                        <ul>
                            <li><a href="#"><FaFacebookF className='icon-f'/></a></li>
                            <li><a href="#"><FaTwitter className='icon-t'/></a></li>
                            <li><a href="#"><FaInstagram className='icon-i'/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-box2">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Latest news</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-box3">
                    <h2>Product</h2>
                    <ul>
                        <li><a href="#">Prototype</a></li>
                        <li><a href="#">Plans & Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>
                <div className="footer-box4">
                    <h2>Support</h2>
                    <ul>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Become a Partner</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </div>
                <div className="footer-box5">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="#">Equria, Keranigonj </a></li>
                        <li><a href="#">+9696365626</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer