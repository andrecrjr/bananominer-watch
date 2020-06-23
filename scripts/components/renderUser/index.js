import { userInput, error, button, remove } from "../helper/querySelectors.js";
import { updateUserData, removeUserData } from "./updaters.js";
import { localRenderData } from "./local.js";
import { validationInputAddress } from "./validationInput.js";

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

export async function getDataBananoMiner() {
  let user = userInput.value;
  try {
    if (validationInputAddress(user)) {
      await fetchData(user);
    }
  } catch (e) {
    error.classList.add("open");
    error.innerText = chrome.i18n.getMessage("errNotfound");
    removeUserData();
  }
}

export const fetchData = async (user) => {
  //found API in the discord,
  //thanks https://discord.com/channels/415935345075421194/566268199210057728/721405574863912991
  //cors anywhere because of the cors from fold@home
  const bananoData = await Promise.all([
    fetch(`https://bananominer.com/user_name/${user}`),
    fetch(
      `https://cors-anywhere.herokuapp.com/https://stats.foldingathome.org/api/donor/${user}`,
      {
        "Content-Type": "application/json",
      }
    ),
  ]);
  const data = await Promise.all([bananoData[0].json(), bananoData[1].json()]);
  console.log(data);
  if (bananoData[0].status === 200 && bananoData[1].status === 200) {
    error.classList.remove("open");
    renderComponent(data);
  } else {
    error.innerText = chrome.i18n.getMessage("errNotfound");
    error.classList.add("open");
    removeUserData();
  }
};

//render component user data screen
const renderComponent = (data) => {
  let template = ``;
  let totalAmount = 0;
  let datetime = new Date();
  template += `<section class="banano__info"> <h2>${chrome.i18n.getMessage(
    "lastUpdate"
  )}</h2><p> ${
    datetime.getMonth() + 1
  }/${datetime.getDate()} - ${datetime.getHours()}:${
    10 > datetime.getMinutes()
      ? `0${datetime.getMinutes()}`
      : datetime.getMinutes()
  }</p>
  </section>
  <section class="banano__info">
  <h2>User ID:</h2><p>${data[0].user.id}</p>
  </section>
  <section class="banano__info">
  <h2>${chrome.i18n.getMessage("banAdr")}</h2><p> ${data[0].user.name}</p>
  </section>
  
  <section class="banano__info">
  <h2>${chrome.i18n.getMessage("AccCreated")}</h2><p> ${
    new Date(data[0].user.created_at).getMonth() + 1
  }/${new Date(data[0].user.created_at).getDate()}/${new Date(
    data[0].user.created_at
  ).getFullYear()}</p>
  </section>
  `;

  if (data[0].payments) {
    data[0].payments.forEach((el) => {
      totalAmount += el.amount;
    });
  }
  template += `<section class="banano__info"><h2>${chrome.i18n.getMessage(
    "barEarned"
  )}:</h2><p>${totalAmount}</p></section>`;
  template += `<section class="banano__info"><h2>${chrome.i18n.getMessage(
    "lastWU"
  )}:</h2><p> ${data[1].last}</p></section>`;
  template += `<section class="banano__info"><h2>${chrome.i18n.getMessage(
    "totalWU"
  )}:</h2><p>${data[1].wus}</p></section>`;
  localStorage.setItem("user_id", data[0].user.id);
  localStorage.setItem("template", template);
  if (template) {
    updateUserData();
    return true;
  }
};
