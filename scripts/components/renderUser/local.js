import { updateUserData } from "./updaters.js";
import { userInput, body } from "../helper/querySelectors.js";
import { getDataBananoMiner } from "./index.js";

export const localRenderData = () =>
  (body.onload = () => {
    if (localStorage.getItem("template")) {
      userInput.value = localStorage.getItem("user_id");
      getDataBananoMiner();
      updateUserData();
    }
  });
