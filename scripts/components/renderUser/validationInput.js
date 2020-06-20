import { error } from "../helper/querySelectors.js";
import { removeUserData } from "./updaters.js";

export const validationInputAddress = (inputValue) => {
  if (inputValue.length > 12 || inputValue === "") {
    error.classList.add("open");
    if (inputValue.length > 12) {
      error.innerHTML = `User ID is longer than home@folding.<br>Please try again.`;
    }
    if (inputValue === "") {
      error.innerHTML = `Please type an User ID first!`;
    }
    removeUserData();
    return false;
  }

  return true;
};
