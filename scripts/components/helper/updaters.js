import { bananoSection, button, remove } from "./querySelectors.js";

export const updateUserData = (legenda = "Update!") => {
  button.innerText = legenda;
  bananoSection.classList.remove("close");
  bananoSection.classList.remove("none");
  remove.classList.remove("close");
  bananoSection.innerHTML = localStorage.getItem("template");
};

export const removeUserData = () => {
  button.innerText = "Find me!";
  bananoSection.classList.add("close");
  localStorage.clear();
  setTimeout(() => {
    bananoSection.classList.add("none");
  }, 550);
  while (bananoSection.children > 0) {
    bananoSection.removeChild();
  }
  remove.classList.add("close");
};
