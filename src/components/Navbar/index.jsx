import { useContext, useState } from "react";
import { BasketContext } from "../../platform/context/BasketContext";
import "./style.scss";
import ROUTES from "../../platform/constants/routes";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { basket, removeFromBasket } = useContext(BasketContext);

  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <>

        <div style={{ visibility: props.isOpen ? "visible" : "hidden"}} className="P-navbar">
      <div className="P-navbar-header">
        <h2>Shopping Cart</h2>
        <span onClick={props.setToggleNavBar}>X</span>
      </div>
      <div className="P-basket-list">
        {basket.map((item) => (
          <div className="P-basket-item" key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <div className="P-basket-end">
              <button onClick={() => removeFromBasket(item)}>X</button>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="toBasket">
          <Link to={ROUTES.BASKET}><button className="G-btn">Go To Baket</button></Link>
          <p>Total Price: ${totalPrice}</p>
        </div>
    </div>
    </>
  );
}