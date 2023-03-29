import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const.js";

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
  orderGoods: [],
  totalCount: 0,
  totalPrice: 0,
  error: [],
};

export const localStorageMiddleware = store => next => action => {
  const nextAction = next(action);
  if (nextAction.type.startsWith("order/")) {
    const orderList = store.getState().order.orderList;
    localStorage.setItem("order", JSON.stringify(orderList));
  }
  return nextAction;
};

export const orderRequestAsync = createAsyncThunk(
  "order/fetch",
  (_, { getState }) => {
    const listId = getState().order.orderList.map(item => item.id);
    return fetch(`${API_URI}${POSTFIX}?list=${listId}`)
      .then(req => req.json())
      .catch(error => ({ error }));
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.orderList
        .find(item => item.id === action.payload.id);

      if (product) {
        product.count += 1;
      } else {
        state.orderList.push({ ...action.payload, count: 1 });
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(orderRequestAsync.pending.type, state => {
        state.error = "";
      })
      .addCase(orderRequestAsync.fulfilled.type, (state, action) => {
        const orderGoods = state.orderList.map(item => {
          const product = action.payload
            .find(product => product.id === item.id);

          product.count = item.count;

          return product;
        });

        state.error = "";
        state.orderGoods = orderGoods;
        state.totalCount = orderGoods.reduce((acc, item) => acc + item.count, 0);
        state.totalPrice = orderGoods.reduce((acc, item) => acc + item.count * item.price, 0);
      })
      .addCase(orderRequestAsync.rejected.type, (state, action) => {
        state.error = action.payload.error;
      });
  }
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;