import './Blog.css';
import blogImg from '../../assets/blog-01.png';
import { FaRegUser,FaRegCalendarAlt,FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog-top">
                <h2>Our Latest News</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="blog-item">
                <div className="blog-box">
                    <img src={blogImg} alt="blog-01" />
                    <div className="blog-text">
                        <div className="blog-admin">
                            <div className="blog-a">
                                <FaRegUser className='user'/>
                                <p>Admin</p>
                            </div>
                            <div className="blog-c">
                                <FaRegCalendarAlt className='cale'/>
                                <p>07/02/2024</p>
                            </div>
                        </div>
                        <h3>Business Plans That Fit Your Best Blog</h3>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="blog-box">
                    <img src={blogImg} alt="blog-01" />
                    <div className="blog-text">
                        <div className="blog-admin">
                            <div className="blog-a">
                                <FaRegUser className='user'/>
                                <p>Admin</p>
                            </div>
                            <div className="blog-c">
                                <FaRegCalendarAlt className='cale'/>
                                <p>07/02/2024</p>
                            </div>
                        </div>
                        <h3>Business Plans That Fit Your Best Blog</h3>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="blog-box">
                    <img src={blogImg} alt="blog-01" />
                    <div className="blog-text">
                        <div className="blog-admin">
                            <div className="blog-a">
                                <FaRegUser className='user'/>
                                <p>Admin</p>
                            </div>
                            <div className="blog-c">
                                <FaRegCalendarAlt className='cale'/>
                                <p>07/02/2024</p>
                            </div>
                        </div>
                        <h3>Business Plans That Fit Your Best Blog</h3>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog