import './style.scss';
import Logo from '../../assets/images/site-logo-white-free-img.png'
import { Link } from 'react-router-dom';
import ROUTES from '../../platform/constants/routes';
export default function Footer() {
    return <footer>
        <div className='links'>
            <div>
                <img src={Logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div>
                <h3>SHOP COLLECTIONS</h3>
                <a href="">Men’s Jeans</a>
                <a href=''>Women’s Tops</a>
                <a href=""> Hoodies</a>
                <a href="">Jackets</a> 
                <a href="">Shoes</a> 
            </div>
            <div>
                <h3>LATEST COLLECTION</h3>
                <a href="">Bags</a>
                <a href=''>Accessories</a>
                <a href=""> Shorts</a>
                <a href="">Wallets</a> 
                <a href="">Sunglasses</a> 
            </div>
            <div>
                <h3>POPULAR COLLECTION</h3>
                <a href="">Women’s Shorts</a>
                <a href=''>Belts</a>
                <a href=""> Watches</a>
                <a href="">Women's Jeans</a> 
                <a href="">Formal Shoes</a> 
            </div>
            <div>
                <h3>QUICK LINKS</h3>
                <Link to={ROUTES.HOME}>HOME</Link>
                <Link to={ROUTES.SHOP}>SHOP</Link>
                <Link to={ROUTES.LOOKBOOK}>LOOKBOOK</Link>
                <Link to={ROUTES.ABOUT}>ABOUT</Link>
                <Link to={ROUTES.CONTACT}>CONTACT US</Link>
            </div>
        </div>
        <div className='end'>
            <p>Copyright © 2023 Brandstore Pro</p>
            <div className='icons'>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <p>
            Powered by Brandstore Pro
            </p>
        </div>
    </footer>
}