const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  if (!location) return (messageOne.textContent = "You must submit a location");

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((res) => {
    res.json().then((data) => {
      if (data.error) return (messageOne.textContent = data.error);

      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    });
  });
});
