import { createSlice } from '@reduxjs/toolkit';
const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState: { 
    inputsearch: '' ,
    searchTerm: '' ,
    carddata:[],
    isshow:false,
}, 
  reducers: {
    setInputValue: (state, action) => {
      state.inputsearch = action.payload;
    },
   
    setCardData: (state, action) => {
        state.carddata = action.payload;
      },
      setShowData: (state, action) => {
        state.isshow = action.payload;
      },

  },
});

export const { setInputValue, setCardData, setShowData } = inputFieldSlice.actions;

export default inputFieldSlice.reducer;
