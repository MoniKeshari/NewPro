import { configureStore } from '@reduxjs/toolkit';
import inputFieldSlice from "../Reduxtoolkit/slice/homeslice";

export const store = configureStore({
  reducer: {
    inputFieldSlice: inputFieldSlice,
  },
})