import { initInput } from "../dom/ratingDOM.js";

const form = document.querySelector(".rating-options");
const options = document.querySelectorAll("[type=radio]");

initInput(form, options);
