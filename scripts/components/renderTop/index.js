import { banMenu } from "../helper/querySelectors.js";
import { estimateBananos } from "../helper/estimateBan.js";

export const renderTop = () => {
  banMenu.innerHTML += `
    <a href="https://stats.foldingathome.org/team/234980" target="_blank" title="Show team stats on foldingathome.org" style="padding-top:3px;">
    <p class="banano__top team">Team: 234980 - www.banano.cc     <span class="tooltip">Show team stats on foldingathome.org</span></p>

    </a>
    <a href="https://ban.family/fah" title="Go to PPD-BAN estimation tool" target="_blank" style="padding-top:3px;"><p class="banano__top">PPD-BAN estimation tool<span class="tooltip" style="padding-right:10px;bottom:-20;right: 15;">Go to PPD-BAN estimation tool</span>    
    </p>
    </a>
    `;
};
