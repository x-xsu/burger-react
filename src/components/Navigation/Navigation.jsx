import style from "./Navigation.module.css";
import { Container } from "../Container/Container.jsx";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../store/category/categorySlice.js";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, index) =>
            <li key={index}>
              <button
                className={classNames(
                  style.button,
                  activeCategory === index ? style.button_active : '')}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: index }));
                }}
              >
                {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
};