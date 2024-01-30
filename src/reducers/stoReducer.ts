import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOItem } from "../models/STOItem";

interface STOState {
  selectedSTO: STOItem | null;
}

const initialState: STOState = {
  selectedSTO: null,
};

const stoSlice = createSlice({
  name: "sto",
  initialState,
  reducers: {
    setSelectedSTO(state, action: PayloadAction<STOItem | null>) {
      state.selectedSTO = action.payload;
    },
  },
});

export const { setSelectedSTO } = stoSlice.actions;
export default stoSlice.reducer;
