'use strict';
//welcoming
let count = 0;

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
let pet = "dog";
let color = "black";
//collecting info (starting the game)

let eyesUserInput = prompt("try to guess my eyes color? hint *its dark");
if (eyesUserInput.toLowerCase() === eyes) {
    alert("oh my do you look at my eyes that much ! cuz its correct");
    count++;
} else {
    alert("last time i checked they were'nt that color !");
}
let hobbyUserInput = prompt("try to guess my hobby ? hint *it requires a console");
if (hobbyUserInput.toLowerCase() === hobby) {
    alert("you know too much about me! continue to the next question");
    count++;
} else {
    alert("nope, that's not my thing !");
}
let countryUserInput = prompt("try to guess where am i from ? hint *we've got mansaf!!!");
if (countryUserInput.toLowerCase() === country) {
    alert("you got me ! " + user);
    count++;
} else {
    alert("nope, " + countryUserInput + " is not my country");
}
let favouritePetInput = prompt("try to guess my favourite pet ? hint *looks like a cat but not a cat");
if (favouritePetInput.toLowerCase() === pet) {
    alert("your'e right, i really love dogs")
    count++;
} else {
    alert("no i dont like " + favouritePetInput)
}
let favouritecolorInput = prompt("try to guess my favourite color? hint *its dark as night")
if (favouritecolorInput.toLowerCase() === color) {
    alert("yeeesss, my whole life is black not just my favourite color!");
    count++;
} else {
    alert("not my color no");
}
for (let i = 4; i >= 1; i--) {
    let ageUserInput = prompt("try to guess how old am i ? hint *between 20-25");
    if (ageUserInput == age) {
        alert(" you're smart " + user + " keep going ");
        count++;
        break;
    } else if (ageUserInput > 22) {
        alert("do i look that old ?, sure not!");
    } else {
        alert("i wish i was that young !, but no");
    }
    if (i == 1)
        alert("22 years was the correct answer !");


}

let restaurants = ['mcdonalds', 'burgermakers', 'hardees']
let hints = ['it serves burgers', 'it has branches', 'it contains yellow color in the logo', 'it serves kids meals', 'it has a delievery','they have a parking lot']
for (let i = 0; i <6; i++) {
    let favRestInput = prompt("try to guess my favourite resturants?")
    if (favRestInput == restaurants[0] || favRestInput == restaurants[1] || favRestInput == restaurants[2]) {
        alert("thats true, and im hungry...");
        count++;
        break;
    } else if (favRestInput !== restaurants[0] || favRestInput !== restaurants[1] || favRestInput !== restaurants[2]) {
        console.log(hints[i]);
        alert(hints[i]);

    }

    if (i == 6)
        alert("mcdonalds, burgermakers or hardees was the correct answer");
}

if (count == 7) {
    alert("OH MY GOD " + user + " you got it all right! , i owe you a cup of coffee my friend... you got 7 grades")
} else {
    alert("oh deer , i guess that you're the one who owes me the coffee! you got " + count + " grades out of 7");
}
