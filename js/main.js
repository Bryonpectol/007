let hamBTN;

let theDiv;
let Home;
let Videos;
let Gallery;
let Beauty;

let iconImg;

randomFavicon();
dayOfWeek();

function Hamburger() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

    let nav = document.getElementById("navid");

    theDiv = document.createElement("a");
    Home = document.createElement("a");
    Videos = document.createElement("a");
    Gallery = document.createElement("a");
    Beauty = document.createElement("a");

    theDiv.className = "theDiv";

    theDiv.textContent = "00 Lifestyle"
    Home.textContent = "Home";
    Videos.textContent = "Characters";
    Gallery.textContent = "Movies";
    Beauty.textContent = "Books";

    // theDiv.className="mobilelinks";
    Videos.className="mobilelinks";
    Gallery.className="mobilelinks";
    Beauty.className="mobilelinks";

    theDiv.setAttribute("href", "/index.html");
    Videos.setAttribute("href", "/html/characters.html");
    Gallery.setAttribute("href", "/html/movies.html");
    Beauty.setAttribute("href", "/html/books.html");


    nav.appendChild(theDiv);
    nav.appendChild(Videos);
    nav.appendChild(Gallery);
    nav.appendChild(Beauty);

    hamBTN.setAttribute("onclick", "exit()");

    iconImg.setAttribute("src", "/images/icons/close-yo-mouth.png");

}

function exit() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

    let nav = document.getElementById("navid");

    // theDiv = document.createElement("div");
    // Home = document.createElement("a");
    // Videos = document.createElement("a");
    // Gallery = document.createElement("a");

    theDiv.className = "theDiv";

    theDiv.textContent = "00 Lifestyle"
    Home.textContent = "Home";
    Videos.textContent = "Characters";
    Gallery.textContent = "Movies";
    Beauty.textContent = "Books";

    nav.removeChild(theDiv);
    nav.removeChild(Videos);
    nav.removeChild(Gallery);
    nav.removeChild(Beauty);

    hamBTN.setAttribute("onclick", "Hamburger()");

    iconImg.setAttribute("src", "/images/icons/ham-and-cheese.png");

}

function randomFavicon() {

    let favicon = document.getElementById("favicon");

    let ranNum = Math.floor((Math.random() * 1865) + 1);

    favicon.setAttribute("href", `/images/normals/1 (${ranNum}).jpg`)

}

// function dayOfWeek() {

    

//     let ranNum;
//     let ranNumWallpaper;

//     const d = new Date();
//     let day = d.getDay();

//     let currentDate = new Date();
//     let time = currentDate.getHours() + ":" + currentDate.getMinutes();

//     if(day == 5 && time == "23:37") {

//         let art = document.getElementById("art");
//         let irl = document.getElementById("irl");

//         let artlink = document.getElementById("artlink");
//         let irllink = document.getElementById("irllink");

//         ranNum = Math.floor((Math.random() * 1865) + 1);
//         ranNumWallpaper = Math.floor((Math.random() * 279) + 1);

//         art.setAttribute("src", `/images/normals/1 (${ranNum}).jpg`);
//         irl.setAttribute("src", `/images/wallpaper/1 (${ranNumWallpaper}).jpg`);

//         artlink.setAttribute("href", `/images/normals/1 (${ranNum}).jpg`);
//         irllink.setAttribute("href", `/images/wallpaper/1 (${ranNumWallpaper}).jpg`);

//     }
//     else {
        
//     }


//     console.log(time);

// }
