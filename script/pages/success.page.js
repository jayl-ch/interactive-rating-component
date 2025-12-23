import { removeRate, getRate } from "../controller/ratingController.js";

const rate = document.querySelector(".selected");

rate.innerHTML = `You selected ${getRate()} out of 5`;
removeRate();
