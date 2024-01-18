let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//Declaring Constants
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

/*
Objects are similar to arrays, but with a few differences. 
One difference is that objects use properties, or keys, to access and modify data.
Objects are indicated by curly braces. An empty object would look like {}.
*/
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        "text": "You are in the town square. You see a sign that says \"Store\"."
    }, {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Creating functions
function goTown() {
    update(locations[0]) //Passing elements of arrays.
}

function goStore() {
    /*const text = document.querySelector("#text");
    text.innerText = "You enter the store.";

    button1.innerText = "Buy 10 health (10 gold)";//The innerText property controls the text that appears in an HTML element.
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;*/
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function update(location) {
    button1.innerText = location["button text"][0]; //the update function using the (location) argument I passed.
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says Store.";
}