const imgs = ["Forever and a Day","Casino Royale","Live and Let Die","Moonraker","Diamonds are Forever","From Russia with Love","Dr. No","Goldfinger","For Your Eyes Only","Thunderball","The Spy Who Loved Me","On Her Majesty's Secret Service","You Only Live Twice","The Man with the Golden Gun","Octopussy and the Living Daylights","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

const links = ["forever-and-a-day","casino-royale","live-and-let-die","moonraker","diamonds-are-forever","from-russia-with-love","dr-no","goldfinger","for-your-eyes-only","thunderball","the-spy-eho-loved-me","on-her-majestys-secret-service","you-only-live-twice","the-man-with-the-golden-gun","octopussy-and-the-living-daylights","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

let Container = document.getElementById("container");

let count;

count = 0;

function Generate() {

  let img = document.createElement("img");
  let link = document.createElement("a");
  let BR = document.createElement("br");
  
  count++;

  link.setAttribute("href", `/images/gallery/${count}.png`);
  img.setAttribute("src", `/images/gallery/${count}.png`);

    img.className = "artimgOne";
    link.className = "celebLinkClass";
  
  container.appendChild(link);
  link.appendChild(img);
  link.appendChild(BR);
};

imgs.forEach(Generate);
