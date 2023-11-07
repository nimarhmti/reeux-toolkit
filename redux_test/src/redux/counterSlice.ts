import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterModel {
  value: number;
}
const initialValues = {
  value: 0,
} as counterModel;

const counterSlicer = createSlice({
  name: "counterMachine",
  initialState: initialValues,
  reducers: {
    increment(state) {
      state.value++;
    },
    addAmount(state, actions: PayloadAction<number>) {
      state.value += actions.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, addAmount, reset } = counterSlicer.actions;

export default counterSlicer.reducer;
