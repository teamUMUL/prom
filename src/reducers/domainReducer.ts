import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DomainItem } from "../models/DomainItem";

interface DomainState {
  selectedDomain: DomainItem | null;
}

const initialState: DomainState = {
  selectedDomain: null,
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setSelectedDomain(state, action: PayloadAction<DomainItem | null>) {
      state.selectedDomain = action.payload;
    },
  },
});

export const { setSelectedDomain } = domainSlice.actions;
export default domainSlice.reducer;
