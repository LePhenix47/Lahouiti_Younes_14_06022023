//Redux
//Redux Toolkit
/**
 *  createSlice() allows us to define a set of pre-defined actions and reducers to generate a slice ofa Redux store
 *
 */

import { createSlice } from "@reduxjs/toolkit";

import { WebStorageService } from "@/react-utils/services/web-storage.service";

/**
 *
 */

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state: any, action: any) => {
      state.list.push(action.payload);

      let oldList = WebStorageService.getKey("employees") || [];
      WebStorageService.setKey("employees", [...oldList, action.payload]);
    },
  },
});

/**
 * We export the actions
 */
export const { addEmployee } = employeesSlice.actions;

/**
 * We export the reducer
 */
export default employeesSlice.reducer;
