import style from "./OrderGoods.module.css";
import { Count } from "../Count/Count.jsx";
import { API_URI } from "../../const.js";

export const OrderGoods = ({ title, price, image, count, id, weight }) => {
  return (
    <li className={style.goods}>
      <img className={style.image} src={`${API_URI}/${image}`} alt={title} />

      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>

        <p className={style.weight}>{weight}</p>

        <p className={style.price}>{price}
          <span className={"currency"}>&nbsp;₽</span>
        </p>
      </div>

      <Count count={count} id={id} />
    </li>
  );
};