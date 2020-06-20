import { error } from "../helper/querySelectors.js";
import { removeUserData } from "./updaters.js";

export const validationInputAddress = (inputValue) => {
  let lessValue = inputValue.length < 12;
  let noValue = inputValue === "";
  if (lessValue || noValue) {
    error.classList.add("open");
    if (lessValue) {
      error.innerHTML = `The length of User ID is less than expected from home@folding.<br>Please try again.`;
    }
    if (noValue) {
      error.innerHTML = `Please type an User ID first!`;
    }
    removeUserData();
    return false;
  }

  return true;
};
