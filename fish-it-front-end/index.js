window.onload = () => {
  const rootElement = document.getElementById("root");
  // rootElement.innerHTML = "Hello for first time Fish-It!"
  const button = document.createElement("root");
  button.innerHTML = "Click me for current date";
  button.addEventListener("click", () => {
    button.innerHTML = new Date().toString();
  });
  rootElement.appendChild(button);
}