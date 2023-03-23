import style from "./Navigation.module.css";
import { Container } from "../Container/Container.jsx";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const state = useSelector((state) => {
    // console.log(state);
  });

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          <li>
            <button
              className={classNames(style.button, style.button_burger, style.button_active)}>Бургеры
            </button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_snack)}>Закуски</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_hotdog)}>Хот-доги</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_combo)}>Комбо</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_shawarma)}>Шаурма</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_pizza)}>Пицца</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_wok)}>Вок</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_dessert)}>Десерты</button>
          </li>
          <li>
            <button className={classNames(style.button, style.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};