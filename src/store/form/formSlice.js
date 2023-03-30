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
  error: null,
  errors: {},
  touch: false,
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
    },
    setError: (state, action) => ({
      ...state,
      errors: action.payload,
    }),
    clearError: state => {
      state.error = {};
    },
    changeTouch: state => {
      state.touch = true;
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

export const {
  updFormValue,
  setError,
  clearError,
  changeTouch
} = formSlice.actions;

export default formSlice.reducer;

export const validateForm = () => (dispatch, getState) => {
  const form = getState().form;
  const errors = {};

  if (!form.name) errors.name = "Name is required!";
  if (!form.phone) errors.phone = "Phone is required!";
  if (!form.address && form.format === "delivery") errors.address = "Address is required!";
  if (!form.floor && form.format === "delivery") errors.floor = "Floor is required!";
  if (!form.intercom && form.format === "delivery") errors.intercom = "Intercom is required!";

  if (form.format === "pickup") {
    dispatch(updFormValue({ field: "address", value: "" }));
    dispatch(updFormValue({ field: "floor", value: "" }));
    dispatch(updFormValue({ field: "intercom", value: "" }));
  }

  Object.keys.length
    ? dispatch(setError(errors))
    : dispatch(clearError());
};