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
  //   const observeBody = new MutationObserver(() => {
  //     const banAddress = document.querySelector(".banano__info--address");
  //     if (banAddress) {
  //       banAddress.onmouseover = () => {
  //         console.log("passou por aqui");
  //       };
  //     }
  //   });
  //   observeBody.observe(body, {
  //     childList: true,
  //     subtree: true,
  //     attributes: true,
  //     characterData: true,
  //   });
};
