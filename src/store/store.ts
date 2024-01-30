import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "../reducers/domainReducer";
import ltoReducer from "../reducers/ltoReducer";
import stoReducer from "../reducers/stoReducer";

const store = configureStore({
  reducer: {
    domain: domainReducer,
    lto: ltoReducer,
    sto: stoReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;

export default store;
