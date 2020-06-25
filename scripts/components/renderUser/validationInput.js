import { error } from "../helper/querySelectors.js";
import { removeUserData } from "./updaters.js";

export const validationInputAddress = (inputValue) => {
  let lessValue = inputValue.length < 7;
  let noValue = inputValue === "";
  if (lessValue || noValue) {
    error.classList.add("open");
    if (lessValue) {
      error.innerHTML = chrome.i18n.getMessage("errShort");
    }
    if (noValue) {
      error.innerHTML = chrome.i18n.getMessage("errEmpty");
    }
    removeUserData();
    return false;
  }

  return true;
};
