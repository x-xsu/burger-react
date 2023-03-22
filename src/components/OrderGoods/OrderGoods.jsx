import style from "./OrderGoods.module.css";
import { Count } from "../Count/Count.jsx";

export const OrderGoods = ({ item }) => {
  return (
    <li className={style.goods}>
      <img className={style.image} src="../../assets/img/free_1.jpg" alt={item} />

      <div className={style.container}>
        <h3 className={style.title}>{item}</h3>

        <p className={style.weight}>180г</p>

        <p className={style.price}>245
          <span className={"currency"}>₽</span>
        </p>
      </div>

      <Count count={1}/>
    </li>
  );
};