import React, { useContext } from "react";
import { BasketContext } from "../../platform/context/BasketContext";
import './style.scss'

export default function Basket() {
  const { basket, removeFromBasket } = useContext(BasketContext);
  return (
    <div className="P-basket">
      <h2>Basket</h2>
      <ul>
        {basket.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromBasket(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
