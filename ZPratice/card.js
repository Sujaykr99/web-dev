let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // Create card
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = inputs[0].value;
  img.style.width = "100%";
  img.style.borderRadius = "8px";

  let name = document.createElement("h2");
  name.textContent = inputs[1].value;

  let age = document.createElement("p");
  age.textContent = "Age: " + inputs[2].value;

  let occupation = document.createElement("p");
  occupation.textContent = inputs[3].value;

  let info = document.createElement("p");
  info.textContent = inputs[4].value;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(occupation);
  card.appendChild(info);

  main.appendChild(card);

  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});



