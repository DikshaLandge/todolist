import { createSlice } from "@reduxjs/toolkit";

const initialState = {
displayText: "",
  check: true,
  inputText: "",
  input: [],
  isEdit:false,
  // text: false,

};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.input = [...state.input, actions.payload];
    },

    editTask:(state,actions)=>{
      // console.log(actions.payload,ele);
    state.isEdit=true;
      state.input.splice(actions.payload,1,"diksha");
      

    },
    deleteTask: (state,actions) => {
     
      state.input.splice(actions.payload,1);
 
    },
  },
});

export const { addTask } = counterSlice.actions;
export const { editTask } = counterSlice.actions;
export const { deleteTask } = counterSlice.actions;

export default counterSlice.reducer;
