//Redux
//Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

//Slice
import { addEmployee } from "../features/employees-list/employees-list.slice";

import employeesListSlice from "../features/employees-list/employees-list.slice";

export const store = configureStore({
  //Need to add in the employees list
  reducer: {},
});
