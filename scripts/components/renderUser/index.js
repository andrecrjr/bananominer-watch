import { userInput, error, button, remove } from "../helper/querySelectors.js";
import { localRenderData } from "./local.js";
import { getDataBananoMiner } from "./fetchBananoMiner.js";
import { monkeyAddress } from "./monkeyAddress.js";
import { deleteButton } from "./cleanUser.js";

//get banano async
export const renderUserData = () => {
  deleteButton();
  localRenderData();
  monkeyAddress();
  //button render screen
  button.innerText = chrome.i18n.getMessage("findMe");
  userInput.placeholder = chrome.i18n.getMessage("yourUser");
  button.addEventListener("click", async function (e) {
    e.preventDefault();
    //get api
    await getDataBananoMiner();
  });
  //remove user page
};
