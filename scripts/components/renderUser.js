import { userInput, error } from "../helper/querySelectors.js";
import { updateUserData } from "../helper/updaters.js";

//get banano async
export async function getBanano() {
  let user = userInput.value;

  try {
    //found API in the discord, thanks https://discord.com/channels/415935345075421194/566268199210057728/721405574863912991
    const response = await fetch(`https://bananominer.com/user_name/${user}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      error.classList.remove("open");
      localStorage.setItem("user_id", user);
      renderUser(data);
    }
  } catch (e) {
    error.classList.add("open");
    console.log("errei");
  }
}

//render user data screen
const renderUser = (data) => {
  let template = ``;

  template += `<h3>Last update: ${
    new Date().getMonth() + 1
  }/${new Date().getDate()} - ${new Date().getHours()}:${
    10 > new Date().getMinutes()
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes()
  }</h3>`;
  template += `<p>User: ${data.user.id}</p>`;
  template += `<p>BAN Address: ${data.user.name.substring(0, 15)}...</p>`;
  template += `<p>Account created at: ${
    new Date(data.user.created_at).getMonth() + 1
  }/${new Date(data.user.created_at).getDate()}/${new Date(
    data.user.created_at
  ).getFullYear()}</p>`;

  if (data.payments) {
    let totalAmount = 0;
    let totalWorkUnits = 0;
    //script that i saw in the discord:
    // https://discord.com/channels/415935345075421194/566268199210057728/723358892297551973 :)
    data.payments.forEach((el) => {
      totalAmount += el.amount;
      totalWorkUnits += el.work_units;
    });
    template += `<h3><b>Total Amount</b>: ${totalAmount}</h3>`;
    template += `<h3><b>Total Work units worked</b>: ${totalWorkUnits}</h3>`;
  } else {
    template += `No payments received yet! Wait about 12 hours!`;
  }
  localStorage.setItem("template", template);
  if (template) {
    updateUserData();
    return true;
  }
};
