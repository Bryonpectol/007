const names = ["James Bond","Vesper Lynd","Q","Ernst Stavro Blofeld","M","Miss Moneypenny","Le Chieffre","Felix Leiter","Paloma","Camille Montes","Madeleine Swann","Solange Dimitrios","Sévérine","Raoul Silva","Gareth Mallory","Mr. White","Lucia Sciarra","Lyutsifer Safin"];

const imgs = ["James Bond","Vesper Lynd","Q","Ernst Stavro Blofeld","M","Miss Moneypenny","Le Chieffre","Felix Leiter","Paloma","Camille Montes","Madeleine Swann","Solange Dimitrios","Sévérine","Raoul Silva","Gareth Mallory","Mr. White","Lucia Sciarra","Lyutsifer Safin"];

const links = ["james-bond","vesper-lynd","q","ernst-stavro-blofeld","m","miss-moneypenny","le-chieffre","felix-leiter","paloma","camille-montes","madeleine-swann","solange-dimitrios","severine","raoul-silva","gareth-mallory","mr-white","lucia-sciarra","lyutsifer-safin"];

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
  img.setAttribute("src", `/images/characters/${[count]}.png`);
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
