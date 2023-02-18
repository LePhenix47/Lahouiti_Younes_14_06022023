//Redux
//Redux Toolkit
/**
 * The createAction() function allows us to avoid creating
 * an Action Creator ourselves
 *
 * Example:
 *
 * const logIn = createAction<boolean>("logIn");
 *
 * let setIsLogged= logIn();
 * → { type: "logIn" }
 *
 * setIsLogged(true)
 * → { type: "logIn", payload: true }
 *
 */
import { createAction } from "@reduxjs/toolkit";
