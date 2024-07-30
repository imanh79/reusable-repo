import { createSlice } from "@reduxjs/toolkit";

const getInitialCounterValue = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("countervalue") || "[]");
  }
  return [];
};

const getInitialCompletionStatus = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("completionStatus") || "{}");
  }
  return {};
};

const initialState = {
  countervalue: getInitialCounterValue(),
  completionStatus: getInitialCompletionStatus(),
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounterValue: (state, action) => {
      state.countervalue.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "countervalue",
          JSON.stringify(state.countervalue)
        );
      }
    },
    deleteCounterValue: (state, action) => {
      state.countervalue = state.countervalue.filter(
        (_: any, index: any) => index !== action.payload
      );
      delete state.completionStatus[action.payload];
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "countervalue",
          JSON.stringify(state.countervalue)
        );
        localStorage.setItem(
          "completionStatus",
          JSON.stringify(state.completionStatus)
        );
      }
    },
    editCounterValue: (state, action) => {
      const { index, newValue } = action.payload;
      state.countervalue[index] = newValue;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "countervalue",
          JSON.stringify(state.countervalue)
        );
      }
    },
    toggleCompletionStatus: (state, action) => {
      const index = action.payload;
      state.completionStatus[index] = !state.completionStatus[index];
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "completionStatus",
          JSON.stringify(state.completionStatus)
        );
      }
    },
  },
});

export const {
  addCounterValue,
  deleteCounterValue,
  editCounterValue,
  toggleCompletionStatus,
} = counterSlice.actions;
export default counterSlice.reducer;
