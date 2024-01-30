import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LTOItem } from "../models/LTOItem";

interface LTOState {
  selectedLTO: LTOItem | null;
}

const initialState: LTOState = {
  selectedLTO: null,
};

const ltoSlice = createSlice({
  name: "lto",
  initialState,
  reducers: {
    setSelectedLTO(state, action: PayloadAction<LTOItem | null>) {
      state.selectedLTO = action.payload;
    },
  },
});

export const { setSelectedLTO } = ltoSlice.actions;
export default ltoSlice.reducer;
