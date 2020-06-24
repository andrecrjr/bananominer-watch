import { bodyUpdates } from "../../bodyUpdates.js";

export const monkeyAddress = () => {
  const insideBody = () => {
    const banaAddress = document.querySelector(".banano__info--address");
    const monkeyUser = document.querySelector(".monkey__user");
    if (banaAddress) {
      banaAddress.onmouseover = () => {
        monkeyUser.classList.add("open");
      };
      banaAddress.onmouseout = () => {
        monkeyUser.classList.remove("open");
      };
    }
  };

  return bodyUpdates(insideBody);
};
