import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayText: "",
  check: true,
  inputText: "",
  input: [],
  isEdit: false,
  editedTextId: null,
  editText: "",
  // text: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.input = [...state.input, actions.payload];
    },

    editTask: (state, actions) => {
      // console.log(actions.payload,ele);
      console.log(actions.payload);
      state.isEdit = true;
      state.editedTextId = actions.payload.id;
      state.editText = actions.payload.ele;
    },

    updateEditedTask: (state, actions) => {
      console.log(actions.payload);
      state.input.splice(state.editedTextId, 1, actions.payload);
      state.isEdit = false;
    },
    deleteTask: (state, actions) => {
      state.input.splice(actions.payload, 1);
    },
  },
});

export const { addTask } = counterSlice.actions;
export const { editTask } = counterSlice.actions;
export const { deleteTask } = counterSlice.actions;
export const { updateEditedTask } = counterSlice.actions;

export default counterSlice.reducer;