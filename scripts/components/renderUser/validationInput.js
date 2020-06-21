import { error } from "../helper/querySelectors.js";
import { removeUserData } from "./updaters.js";

export const validationInputAddress = (inputValue) => {
  let lessValue = inputValue.length < 7;
  let noValue = inputValue === "";
  if (lessValue || noValue) {
    error.classList.add("open");
    if (lessValue) {
      error.innerHTML = `User ID must be 7 characters.<br>Please try again.`;
    }
    if (noValue) {
      error.innerHTML = `Please input User ID`;
    }
    removeUserData();
    return false;
  }

  return true;
};
