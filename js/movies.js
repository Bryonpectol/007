const names = ["No Time to Die","Spectre","Skyfall","Quantum of Solace","Casino Royale"];

const imgs = ["No Time to Die","Spectre","Skyfall","Quantum of Solace","Casino Royale"];

const links = ["no-time-to-die","spectre","skyfall","quantum-of-solace","casino-royale"];

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
  img.setAttribute("src", `/images/movies/${[count]}.jpg`);
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
