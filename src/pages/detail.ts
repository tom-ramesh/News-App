import "../styles/detail.css";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);
