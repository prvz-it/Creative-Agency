import './Expert.css' ;
import expertImg from '../../assets/Expert-01.png' ;

const Expert = () => {
  return (
    <>
    <section id="expert">
        <div className="container">
            <div className="expert-top">
                <h2>Our Expert Team Member</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="expertBox">
                <div className="expert-i">
                    <img src={expertImg} alt="expert-01" />
                    <div className="expert-opcity">
                        <div className="expert-text">
                            <h2>Tabbasum Mir</h2>
                            <p>Digital Marketor</p>
                        </div>
                    </div>
                </div>
                <div className="expert-i">
                    <img src={expertImg} alt="expert-01" />
                    <div className="expert-opcity">
                        <div className="expert-text">
                            <h2>Tabbasum Mir</h2>
                            <p>Digital Marketor</p>
                        </div>
                    </div>
                </div>
                <div className="expert-i">
                    <img src={expertImg} alt="expert-01" />
                    <div className="expert-opcity">
                        <div className="expert-text">
                            <h2>Tabbasum Mir</h2>
                            <p>Digital Marketor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Expert