'use strict';
//welcoming
let user = prompt("your name ?");
alert(" welcome " + user)
alert("my name is aya, and we're gonne play a little guessing me game...")
alert("if you answered all the questions correctly you'll get a free cup of coffee")
alert("are you ready?")

//declaring my info
let age = '22';
let eyes = "brown";
let hobby = "gaming";
let country = "jordan";

//collecting info (starting the game)
let ageUserInput = prompt("try to guess how old am i ? hint *between 20-25");
if (ageUserInput == age) {
    alert(" you're smart " + user + " keep going ");
} else {
    alert("do i look like im that age?, sure not!");
}
let eyesUserInput = prompt("try to guess my eyes color? hint *its dark");
if (eyesUserInput.toLowerCase() === eyes) {
    alert("oh my do you look at my eyes that much ! cuz its correct");
} else {
    alert("last time i checked they were'nt that color !");
}
let hobbyUserInput = prompt("try to guess my hobby ? hint *it requires a console");
if (hobbyUserInput.toLowerCase() === hobby) {
    alert("you know too much about me! continue to the last question");
} else {
    alert("nope, that's not my thing !");
}
let countryUserInput = prompt("try to guess where am i from ? hint *we've got mansaf!!!");
if (countryUserInput.toLowerCase() === country) {
    alert("OH MY GOD " + user + " you got it all right! , i owe you a cup of coffee my friend...");
} else {
    alert("oh deer that's not true, i guess that you're the one who owes me the coffee!");
}