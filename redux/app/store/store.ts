"use client";
import CounterSlice from "@/redux/features/counterSlice/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { CounterSlice },
});
export default store;
