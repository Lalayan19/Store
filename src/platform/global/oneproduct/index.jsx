import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";
import "./style.scss";

export default function Block(props) {
  return (
    <Link to={ROUTES.DETAILS.replace(":id", props.pro.id)} className="oneProduct">
      <img src={props.pro.image} alt="" />
      <p className="category">{props.pro.category}</p>
      <p className="name">{props.pro.title}</p>
      <p className="price">${props.pro.price}</p>
    </Link>
  );
}
