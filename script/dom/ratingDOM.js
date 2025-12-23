import {
  removeActive,
  findActive,
  setError,
  setRate,
  removeError,
} from "../controller/ratingController.js";

export function initInput(form, options) {
  form.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("option")) {
      removeActive(options);
      target.classList.add("active");
    } else if (target.classList.contains("submit")) {
      e.preventDefault();
      if (!findActive(options)) {
        setError(options);
        return;
      }
      setRate(options);
      removeActive(options);
      removeError(options);
      window.location.href = "../success-message.html";
    }
  });
}
