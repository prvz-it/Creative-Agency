import './Testimonial.css';
import testImg from '../../assets/testimonial-01.png';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
    <section id="testimonial">
        <div className="container">
            <div className="testimonial-top">
                <h2>We Care About Our Customer Experience Too</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-box">
              <img src={testImg} alt="testimonial-01" />
              <div className="testimonial-icon">
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="testimonial-text">
                <h2>Parvez Mir</h2>
                <p>Frontend Developer</p>
              </div>
              </div>
              <div className="testimonial-box">
              <img src={testImg} alt="testimonial-01" />
              <div className="testimonial-icon">
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="testimonial-text">
                <h2>Parvez Mir</h2>
                <p>Frontend Developer</p>
              </div>
              </div>
              <div className="testimonial-box">
              <img src={testImg} alt="testimonial-01" />
              <div className="testimonial-icon">
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
                <FaStar className='T-icon'/>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="testimonial-text">
                <h2>Parvez Mir</h2>
                <p>Frontend Developer</p>
              </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial