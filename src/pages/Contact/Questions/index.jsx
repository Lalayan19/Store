
import { Link } from "react-router-dom"
import "./style.scss"
import ROUTES from "../../../platform/constants/routes"


export default function Questions() {

    return (<>
        <div className="questionsMain">
            <div className="typeUs">
                <div className="typeHeader">
                    <h2>GOT QUESTIONS</h2>
                    <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                    </p>
                </div>
                <div className="inputs">
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input className="G-input" name="name" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Your Email</label>
                        <input className="G-input" name="email" type="text" />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input className="G-input" name="subject" type="text" />
                    </div>
                    <div>
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </div>

                    <button className="G-btn">SEND</button>
                </div>

            </div>
            <div className="fastLinks">
                <div>
                    <h2>Quick Links</h2>
                    <Link to={ROUTES.HOME}>HOME</Link>
                    <Link to={ROUTES.SHOP}>SHOP</Link>
                    <Link to={ROUTES.LOOKBOOK} >LOOKBOOK</Link>
                    <Link to={ROUTES.ABOUT} >ABOUT</Link>
                    <Link to={ROUTES.CONTACT} >CONTACT US</Link>
                </div>
                <div className="lastLinks">
                    <h2>Latest Collections</h2>
                    <a href="">Women’s Shorts</a>
                    <a href=''>Belts</a>
                    <a href=""> Watches</a>
                    <a href="">Women's Jeans</a>
                    <a href="">Formal Shoes</a>
                </div>
            </div>
        </div>
    </>)
}