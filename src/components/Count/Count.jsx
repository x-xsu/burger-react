import style from "./Count.module.css";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice.js";

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }))
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>-</button>
      <p>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  );
};