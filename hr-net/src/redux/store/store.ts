//Redux
//Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

//Slice
import { addEmployee } from "../features/employees-list/employees-list.slice";
import employeesListSlice from "../features/employees-list/employees-list.slice";

//Utils
import { log } from "@/react-utils/functions/helper-functions";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["employees"], // the reducers that you want to persist
// };

// const persistedReducer = persistReducer(persistConfig, employeesListSlice);
//Services
//
// Load employees list from localStorage

export const store = configureStore({
  //Need to add in the employees list
  reducer: {
    employees: employeesListSlice,
  },
});

// export const persistor = persistStore(store);
