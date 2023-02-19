//Redux
//Redux Toolkit
/**
 *  createSlice() allows us to define a set of pre-defined actions and reducers to generate a slice ofa Redux store
 *
 */

import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state: any, action: any) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
