import { bodyUpdates } from "../../bodyUpdates.js";
import { removeUserData } from "./updaters.js";

export const deleteButton = () => {
  const deleteUpdate = () => {
    const remove = document.querySelector(".remove");
    if (remove) {
      remove.addEventListener("click", function () {
        removeUserData();
      });
    }
  };

  bodyUpdates(deleteUpdate);
};
