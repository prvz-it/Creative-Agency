import './Navbar.css' ;
import Logo from '../../assets/logo.png' ;
import { FaArrowAltCircleDown } from "react-icons/fa";

const Navber = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="main-nav">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="logo"/></a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <button>Contact Us <FaArrowAltCircleDown className='Icon'/> </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Navber