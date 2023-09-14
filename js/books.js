const names = ["Casino Royale","Live and Let Die","Moonraker","Diamonds are Forever","From Russia with Love","Dr. No","Goldfinger","For Your Eyes Only","Thunderball","The Spy Who Loved Me","On Her Majesty's Secret Service","You Only Live Twice","The Man with the Golden Gun","Octopussy and the Living Daylights"];

const imgs = ["Casino Royale","Live and Let Die","Moonraker","Diamonds are Forever","From Russia with Love","Dr. No","Goldfinger","For Your Eyes Only","Thunderball","The Spy Who Loved Me","On Her Majesty's Secret Service","You Only Live Twice","The Man with the Golden Gun","Octopussy and the Living Daylights"];

const links = ["casino-royale","spectre","skyfall","quantum-of-solace","casino-royale"];

let Container = document.getElementById("container");

let count;

count = 0;

function Generate() {

  let img = document.createElement("img");
  let name = document.createElement("p");
  let link = document.createElement("a");
  let BR = document.createElement("br");
  
  count++;

  link.setAttribute("href", `/html/${links[count - 1]}.html`);
  img.setAttribute("src", `/images/books/${[count]}.jpg`);
  name.textContent = "" + names[count - 1];

    img.className = "artimgOne";
    name.className = "paltClass";
    link.className = "celebLinkClass";
  
  container.appendChild(link);
  link.appendChild(name);
  link.appendChild(img);
  link.appendChild(BR);
};

imgs.forEach(Generate);
