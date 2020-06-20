import { getBanano } from "./components/renderUser.js";
import { button, remove } from "./helper/querySelectors.js";
import { onloadBody } from "./components/local.js";

(function () {
  onloadBody();
})();

//button render screen
button.addEventListener("click", async function (e) {
  e.preventDefault();
  await getBanano();
});
remove.addEventListener("click", function () {
  removeData();
});
