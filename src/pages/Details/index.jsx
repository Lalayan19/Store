import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import { BasketContext } from "../../platform/context/BasketContext";
import ROUTES from "../../platform/constants/routes";

export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, [id]);

  const { addToBasket } = useContext(BasketContext);

  return (<>
  <div className="uxaki">

  </div>
      <div className="P-details">
      <div className="details">
      <img src={details.image} alt="" />
      <div className="right-side">
        <p className="category">
          {details.category}
        </p>
        <div>
          <p style={{fontSize: 25}}>$ {details.price}</p>
          <p>{details.title}</p>
          <p>{details.description}</p>
        </div>
        <button onClick={() => addToBasket(details)} className="G-btn">ADD TO CART</button>
      </div>
      </div>

    </div>
  </>

  );
}
