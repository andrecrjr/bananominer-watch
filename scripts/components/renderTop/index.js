import { banMenu } from "../helper/querySelectors.js";
import { estimateBananos } from "../helper/estimateBan.js";

export const renderTop = () => {
  banMenu.innerHTML += `
    <p>Team: 234980 - www.banano.cc</p>
    <a href="https://ban.family/fah" target="_blank" style="padding-top:3px;"><p class="banano__top">1000 PPD ≈ BAN ${estimateBananos(
      1000
    )}</p></a>
    `;
};
