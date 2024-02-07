import './Header.css' ;
import bannerImg from "../../assets/banner-img.png" ;

const Header = () => {
  return (
    <section id="main-header">
      <div className="container">
        <div className="header-box">
          <div className="header-left">
            <h1>We Are Digital Product Design Agency</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="header-btn">
              <button>Get Started</button>
            </div>
          </div>
          <div className="header-right">
            <img src={bannerImg} alt="banner-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header