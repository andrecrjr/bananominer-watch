import { userInput, error, button, remove } from "../helper/querySelectors.js";
import { updateUserData, removeUserData } from "./updaters.js";
import { localRenderData } from "./local.js";
import { validationInputAddress } from "./validationInput.js";

//get local user component to index
export { localRenderData };
//get banano async
export const renderUserData = () => {
  //button render screen
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
    error.innerText = `User ID could not be found. Please try again!`;
    removeUserData();
    console.log(e);
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
  if (bananoData[0].status === 200 && bananoData[1].status === 200) {
    error.classList.remove("open");
    localStorage.setItem("user_id", data[1].name);
    renderComponent(data);
  } else {
    error.innerText = "User ID doesn't exist. Please try again!";
    error.classList.add("open");
    removeUserData();
  }
};

//render component user data screen
const renderComponent = (data) => {
  let template = ``;
  let totalAmount = 0;
  let datetime = new Date();
  template += `<p2>Last update:</p2><p> ${
    datetime.getMonth() + 1
  }/${datetime.getDate()} - ${datetime.getHours()}:${
    10 > datetime.getMinutes()
      ? `0${datetime.getMinutes()}`
      : datetime.getMinutes()
  }</p>
  <p2>User:</p2><p>${data[0].user.id}</p>
  <p2>BAN Address:</p2><p> ${data[0].user.name.substring(0, 64)}</p>
  <p2>Account created at:</p2><p> ${
    new Date(data[0].user.created_at).getMonth() + 1
  }/${new Date(data[0].user.created_at).getDate()}/${new Date(
    data[0].user.created_at
  ).getFullYear()}</p>`;

  if (data[0].payments) {
    data[0].payments.forEach((el) => {
      totalAmount += el.amount;
    });
  }
  template += `<p2>Total $BAN earned:</p2><p>${totalAmount}</p>`;
  template += `<p2>Total Work Units completed:</p2><p>${data[1].wus}</p>`;

  localStorage.setItem("template", template);
  if (template) {
    updateUserData();
    return true;
  }
};
