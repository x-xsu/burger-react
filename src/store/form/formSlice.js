import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { closeModal } from "../modalDelivery/modalDeliverySlice.js";
import { clearOrder } from "../order/orderSlice.js";

const initialState = {
  name: "",
  phone: "",
  format: "delivery",
  address: "",
  floor: "",
  intercom: "",
};

export const submitForm = createAsyncThunk(
  "form/submit",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://cloudy-slash-rubidium.glitch.me/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      if (!res.ok) {
        throw new Error(`Ошибка ${res.statusText}`);
      }

      dispatch(clearOrder());
      dispatch(closeModal());

      return await res.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending.type, (state) => {
        state.status = "loading";
        state.response = null;
        state.error = null;
      })
      .addCase(submitForm.fulfilled.type, (state, action) => {
        state.status = "success";
        state.response = action.payload;
      })
      .addCase(submitForm.rejected.type, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const { updFormValue } = formSlice.actions;

export default formSlice.reducer;