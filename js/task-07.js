const inputChange = document.querySelector("#font-size-control");
const spanChange = document.querySelector("#text");
const handleInput = () => {
  spanChange.style.fontSize = `${inputChange.value}px`;
};
inputChange.addEventListener("input", handleInput);

