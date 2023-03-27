import { Order } from "../Order/Order.jsx";
import { Container } from "../Container/Container.jsx";
import style from "./Catalog.module.css";
import { Product } from "../Product/Product.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productRequestAsync } from "../../store/product/productSlice.js";

export const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>

        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div>
            <ul className={style.list}>
              {products.length
                ? products.map(item => (
                    <li key={item.id}>
                      <Product item={item} />
                    </li>
                  )
                )
                : <p>К сожалению товаров данной категории нет</p>
              }

            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};