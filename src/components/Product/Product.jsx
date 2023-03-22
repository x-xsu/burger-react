import style from "./Product.module.css";

export const Product = (props) => {
  return (
    <article className={style.product}>
      <img src="../../assets/img/photo-5.jpg" alt={props.title} className={style.image} />

      <p className={style.price}>689<span className={"currency"}>₽</span></p>

      <h3 className={style.title}>
        <button className={style.detail}>{props.title}</button>
      </h3>

      <p className={style.weight}>520г</p>

      <button className={style.add} type="button">Добавить</button>
    </article>

  );
};