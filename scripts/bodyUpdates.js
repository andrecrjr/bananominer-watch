import { body } from "./components/helper/querySelectors.js";

export const bodyUpdates = (func, element = body) => {
  const updateObserver = new MutationObserver(func);
  return updateObserver.observe(element, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
};
