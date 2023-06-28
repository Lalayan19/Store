import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import ROUTES from "../../platform/constants/routes";
import Logo from "../../assets/images/site-logo-white-free-img.png";
import DarkLogo from "../../assets/images/site-logo-free-img-1-140x53.png";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Header() {
  const pathname = useLocation().pathname;
  const [color, setColor] = useState("black");
  const [image, setImage] = useState(Logo);

  const [toggleNavBar, setToggleNavBar] = useState(false);

  useEffect(() => {
    if (pathname.includes("shop") || pathname.includes("details")|| pathname.includes("basket")) {
      setColor("black");
    } else {
      setColor("white");
    }
    if (pathname.includes("shop") || pathname.includes("details")|| pathname.includes("basket"))  {
      setImage(DarkLogo);
    } else {
      setImage(Logo);
    }
  }, [pathname]);
  if (toggleNavBar == true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return (
    <header >
      <Link to={ROUTES.HOME}>
        <img src={image} alt="" />
      </Link>
      <div className="nav">
        <Link to={ROUTES.HOME} style={{ color: color }}>
          HOME
        </Link>
        <Link to={ROUTES.SHOP} style={{ color: color }}>
          SHOP
        </Link>
        <Link to={ROUTES.LOOKBOOK} style={{ color: color }}>
          LOOKBOOK
        </Link>
        <Link to={ROUTES.ABOUT} style={{ color: color }}>
          ABOUT
        </Link>
        <Link to={ROUTES.CONTACT} style={{ color: color }}>
          CONTACT US
        </Link>
        <img
          src="https://www.freeiconspng.com/thumbs/bags-icon/shopping-bag-icon-5.png"
          alt=""
          onClick={() => setToggleNavBar(true)}
        />
      </div>
      <Navbar
        isOpen={toggleNavBar}
        setToggleNavBar={() => setToggleNavBar(false)}
      />
    </header>
  );
}
