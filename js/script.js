console.log("Hello world");
/* 
ici les scripts 
*/
// les variables

let nom = "Gabard";
let prenom = false; // true | false
let age = 28; //true
const version = 8.2;
let nombre = 9;
let pause = undefined;

console.log(parseFloat(version));

nombre % 2 == 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`);

if (!age) {
    console.log(true);
} else {
    console.error(false);
}

console.log(pause);
// tableau
const lang = ["fr", "en", "it", "jp"];
console.table(lang);
const menu = ["normal", "xl", "xx-l", "super size"];
console.table(typeof menu);
const menus = {
    normal: ["sandwich", "boisson", "dessert", 7].join("-"),
    xl: ["double sandwich", "moyenne boisson", "dessert", 9].join("-"),
    xxl: ["double sandwich 2 viande", "grande boisson", "dessert", 11].join("-"),
    super: ["super sandwich 4 viande", "super boisson", "dessert", 14].join("-")
    //console.log(Object.values(menus))

};const el_ul = document.querySelector("ul");
console.log(el_ul);
const title = document.querySelector(".primary-title");
console.log(title);
title.innerText = "Tous nos menus";

for (let data in menus) {
    console.log(data + " : " + menus[data] + "\n");
    el_ul.innerHTML += `<li>${data} : ${menus[data]}</li>`;
}