import { updateUserData } from "./helper/updaters.js";
import { userInput, body } from "./helper/querySelectors.js";

export const onloadLocalUser = () =>
  (body.onload = () => {
    if (localStorage.getItem("template") && localStorage.getItem("user_id")) {
      userInput.value = localStorage.getItem("user_id");
      updateUserData();
    }
  });
