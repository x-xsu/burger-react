import { Order } from "../Order/Order.jsx";
import { Container } from "../Container/Container.jsx";
import style from "./Catalog.module.css";
import { Product } from "../Product/Product.jsx";

const goodsList = [
  { title: "Мясная бомба" },
  { title: "Супер сырный" },
  { title: "Сытный" },
  { title: "Итальянский" },
  { title: "Вечная классика" },
  { title: "Тяжелый удар" },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.container}>

        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {goodsList.map((item, index) => (
                  <li key={index} className={style.item}>
                    <Product title={item.title} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};