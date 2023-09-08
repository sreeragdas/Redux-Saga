import { createSlice } from "@reduxjs/toolkit";
export const catSlice = createSlice({
    //name is being refered in catSaga {takeEvery}
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    //here state means which we initilize in initialState
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatSucess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = true;
    },
  },
});
export const { getCatsFetch, getCatSucess, getCatsFailure } = catSlice.actions;
export default catSlice.reducer;
