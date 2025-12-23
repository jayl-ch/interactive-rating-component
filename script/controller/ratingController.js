export function removeActive(opt) {
  opt.forEach((b) => {
    b.classList.remove("active");
  });
}

export function findActive(opt) {
  return Array.from(opt).find((b) => b.classList.contains("active"));
}

export function setError(opt) {
  opt.forEach((b) => b.classList.add("error"));
}

export function removeError(opt) {
  opt.forEach((b) => b.classList.remove("error"));
}

export function setRate(opt) {
  localStorage.setItem("rate", findActive(opt).value);
}

export function removeRate() {
  localStorage.removeItem("rate");
}

export function getRate() {
  return localStorage.getItem("rate");
}
