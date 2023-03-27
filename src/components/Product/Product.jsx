import style from "./Product.module.css";
import { API_URI } from "../../const.js";

export const Product = ({ item }) => {
  return (
    <article className={style.product}>
      <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image} />

      <p className={style.price}>
        {item.price}
        <span className={"currency"}>₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{item.title}</button>
      </h3>

      <p className={style.weight}>{item.weight}г</p>

      <button className={style.add} type="button">Добавить</button>
    </article>

  );
};