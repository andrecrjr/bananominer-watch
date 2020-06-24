import { userInput, error, button, remove } from "../helper/querySelectors.js";
import { updateUserData, removeUserData } from "./updaters.js";
import { localRenderData } from "./local.js";
import { getDataBananoMiner } from "./fetchBananoMiner.js";

//get local user component to index
export { localRenderData };
//get banano async
export const renderUserData = () => {
  //button render screen
  button.innerText = chrome.i18n.getMessage("findMe");
  userInput.placeholder = chrome.i18n.getMessage("yourUser");
  button.addEventListener("click", async function (e) {
    e.preventDefault();
    //get api
    await getDataBananoMiner();
  });

  //remove user page
  remove.addEventListener("click", function () {
    removeUserData();
  });
};
