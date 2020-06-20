import { updateUserData } from "./updaters.js";
import { userInput, body } from "../helper/querySelectors.js";

export const localRenderData = () =>
  (body.onload = () => {
    if (localStorage.getItem("template") && localStorage.getItem("user_id")) {
      userInput.value = localStorage.getItem("user_id");
      updateUserData();
    }
  });
