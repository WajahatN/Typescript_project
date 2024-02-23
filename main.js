var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Start
//Q 1
var personMessage = "Wajahat";
console.log("\"Hello ".concat(personMessage, ", would you like to learn some Python today?\""));
//Q 2
var nameCases = "Wajahat";
console.log(nameCases.toLowerCase());
console.log(nameCases.toUpperCase());
console.log(nameCases.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//Q 3
var famousQuot = "Brendan Eich  once said, \"The future of technology lies in the hands of the next generation of developers,\" ";
console.log(famousQuot);
//Q 4
var famousPerson = "Guido van Rossum";
var message = "".concat(famousPerson, "  once said, \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex,\" ");
console.log(message);
//Q 5
var strippingNames = " \n\tWajahat\t\n ";
console.log(strippingNames);
var withoutWhitespace = strippingNames.trim();
console.log(withoutWhitespace);
//Q 6
console.log(6 + 2); //addition;
console.log(10 - 2); //subtraction;
console.log(4 * 2); //multiplication;
console.log(16 / 2); //division;
//Q 7
console.log(6 + 2); //addition;
console.log(10 - 2); //subtraction;
console.log(4 * 2); //multiplication;
console.log(16 / 2); //division;
//Q 8
var favoriteNumber = "5";
var favoriteMessage = "Here is me Favorite Number: " + favoriteNumber;
console.log(favoriteMessage);
//Q 9 part 1
//Program Written by: Wajahat
//Current Date:17-2-2024
//This Program will write "Famous Person Quot"
famousPerson = "Guido van Rossum";
message = "".concat(famousPerson, "  once said, \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex,\" ");
console.log(message);
//part 2
//Program Written by: Wajahat
//Current Date:17-2-2024
//This Program will write "white spaces"
strippingNames = " \n\tWajahat\t\n ";
console.log(strippingNames);
withoutWhitespace = strippingNames.trim();
console.log(withoutWhitespace);
//Q 10
var names = ["Anus", "Bilal", "Adil", "Hamid", "Shahmeer"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Q 11
names = ["Anus", "Bilal", "Adil", "Hamid", "Shahmeer"];
var Greetings = "Assalam o alikum: ";
for (var i = 0; i < names.length; i++) {
    console.log(Greetings + names[i]);
}
//Q 12
var transportation = ["Train", "Car", "motorcycle", "Cycle"];
for (var a = 0; a < transportation.length; a++) {
    console.log("I would like to own a: " + transportation[a]);
}
//Q 13
var guestList = ["Anus", "Bilal", "Adil", "Hamid"];
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n Thanks you!\n");
}
//Q 14
guestList = ["Anus", "Bilal", "Adil", "Hamid"];
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n Thanks you!\n");
}
var absent_Guest = "Hamid";
var new_Guest = "Shahmeer";
guestList[3] = new_Guest;
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n Thanks you!\n");
}
console.log("".concat(absent_Guest, ": is not coming."));
//Q 15
guestList = ["Anus", "Bilal", "Adil", "Hamid"];
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n Thanks you!\n");
}
var new_Table = "we have a big table.for a dinner";
absent_Guest = "Hamid";
new_Guest = "Shahmeer";
guestList[3] = new_Guest;
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n".concat(new_Table, " \nThanks you!\n"));
}
guestList.unshift("Mateen");
guestList.push("ALi");
guestList.splice(3, 0, "Usad");
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\nThanks you!");
    console.log(new_Table, "\n");
}
console.log("".concat(absent_Guest, ": is not coming."));
//Q 16
guestList = ["Anus", "Bilal", "Adil", "Hamid"];
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n Thanks you!\n");
}
new_Table = "we have a big table.for a dinner";
absent_Guest = "Hamid";
new_Guest = "Shahmeer";
guestList[3] = new_Guest;
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\n".concat(new_Table, " \nThanks you!\n"));
}
guestList.unshift("Mateen");
guestList.splice(3, 0, "Usad");
guestList.push("ALi");
var shrinkingGuest = "Sorry guys. I have two person space for a dinner.";
for (var b = 0; b < guestList.length; b++) {
    console.log("Dear Mr. " +
        guestList[b] +
        ",\nIt is our pleasure to invite you in our party.\nThanks you!");
    console.log(new_Table);
    console.log(shrinkingGuest, "\n");
}
console.log("".concat(absent_Guest, ": is not coming."));
for (var h = 0; h < 5; h++) {
    var remove = guestList.pop();
    console.log("".concat(remove, ": I apologize I am, not invite you in  a dinner "));
}
for (var g = 0; g < guestList.length; g++) {
    console.log("".concat(guestList, ": You are invited for a dinner. "));
}
guestList.pop();
guestList.pop();
console.log("Empty Program");
//Q 17
var seeingTheWorld = [
    "Saudi Arabia",
    "India",
    "China",
    "United States",
    "Canada",
];
console.log("Original Order");
console.log(seeingTheWorld);
console.log(__spreadArray([], seeingTheWorld, true).sort());
console.log(seeingTheWorld);
console.log(__spreadArray([], seeingTheWorld, true).sort().reverse());
console.log(seeingTheWorld);
seeingTheWorld.reverse();
console.log(seeingTheWorld);
seeingTheWorld.reverse();
console.log(seeingTheWorld);
console.log(__spreadArray([], seeingTheWorld.sort(), true));
console.log(__spreadArray([], seeingTheWorld.sort().reverse(), true));
//Q 18
console.log("\nprint a message indicating the number of people you are inviting to dinner.");
console.log("We had finally invited ".concat(guestList.length, " guest for a Dinner"));
//Q 19
var cities = ["Karachi", "Beijing", "Delhi", "Tokyo", "Cairo"];
console.log("List of Cities");
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log(city);
}
//Q 20
var javascript = {
    name: "javascript",
    invented: "	December 4, 1995",
    founder: "Brendan Eich",
};
//Q 21
function creatFurits(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste,
    };
}
var fruits = [
    creatFurits("Apple", "Red", "Sweets"),
    creatFurits("Strawberry", "Red", "Sweet"),
    creatFurits("Grapes", "Purple/Green", "Sweet"),
];
var InvalidIndex = 10;
console.log("fruits at index ".concat(InvalidIndex, ":"), fruits[InvalidIndex]);
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.color, ", Taste: ").concat(fruit.taste));
});
//Q 22
var bike = "Super Power";
console.log("is bike === 'Super Power'? I predict  True!");
console.log(bike == "Super Power");
//Question 5 true
//1
console.log("is bike !== 'Power Super'? I predict  True!");
console.log(bike !== "Power Super");
//2
console.log("is bike !== 'mazda'? I predict  True!");
console.log(bike !== "mazda");
//3
console.log("is bike == 'Super Power'? I predict  True!");
console.log(bike == "Super Power");
//4
console.log("is bike === 'Super Power'? I predict  True!");
console.log(bike === "Super Power");
//5
console.log("is bike == 'Super Power'? I predict  True!");
console.log(bike == "Super Power");
//Question 5 false
//6
console.log("is bike == 'Power Super'? I predict  True!");
console.log(bike == "Power Super");
//7
console.log("is bike !== 'Super Power'? I predict  True!");
console.log(bike !== "Super Power");
//8
console.log("is bike == 'Spuer Power'? I predict  True!");
console.log(bike == "Spuer Power");
//9
console.log("is bike !=== 'Super Power'? I predict  True!");
console.log(bike === "Unique");
//10
console.log("is bike == 'mazda'? I predict  True!");
console.log(bike == "honda\n");
//complet
//Q 23
//Test 1
//true
var car = "Rolls Royce";
console.log("Is car == 'Rolls Royce'");
console.log(car == "Rolls Royce");
//fales
console.log("Is car !== 'Rolls Royce'");
console.log(car !== "Rolls Royce");
//Test 2
//true
console.log("comparission toLowerCase");
var text1 = "Hello world";
var text2 = "hello world";
console.log(text1.toLowerCase() === text2);
console.log(text1 === text2);
//Test 3
console.log("\n");
var num1 = 10;
var num2 = 6;
//true
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 !== num2);
//false
console.log(num1 === num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log("\n");
//Test 4
var x = 5;
var y = 10;
var z = 15;
//true
console.log(x < y && y < z);
console.log(x < y || y > z);
//false
console.log(x > y && y > z);
console.log(x > y || y > z);
console.log("\n");
//Test 5
//true
var country = ["Pakistan", "China", "India", "Iran"];
console.log(country.includes("Pakistan"));
//false
console.log(country.includes("Iraq"));
console.log("\n");
//Test 6
var universe = ["Venus", "Earth", "Mercury", "Neptune"];
//true
console.log(!universe.includes("Uranus"));
//false
console.log(!universe.includes("Earth"));
//Q 24
console.log("\n");
var alien_color = "green";
//condition 1
if (alien_color == "green") {
    console.log("congratulations! You just earnd 5 points.");
}
// second vesion
alien_color = "blue";
if (alien_color == "blue  ") {
    console.log("congratulations! You just earnd 5 points.");
}
console.log("\n");
//Q 25
if (alien_color == "green") {
    console.log("The player gets only 5 points by shooting the alien.");
}
else {
    console.log("The player has scored only 10 points.");
}
console.log("\n");
//Q 26
//version 1
console.log("version 1 velue assin is 'green'");
var alienColor = "green";
if (alienColor == "green") {
    console.log("congratulations! You just earnd 5 points.");
}
else if (alienColor == "yellow") {
    console.log("congratulations! You just earnd 10 points.");
}
else if (alienColor === "red") {
    console.log("congratulations! You just earnd 15 points.");
}
else {
    console.log("Unknown alien color.");
}
//version 2
console.log("\nversion 2 velue assin is 'yellow'");
alienColor = "yellow";
if (alienColor == "green") {
    console.log("congratulations! You just earnd 5 points.");
}
else if (alienColor == "yellow") {
    console.log("congratulations! You just earnd 10 points.");
}
else if (alienColor === "red") {
    console.log("congratulations! You just earnd 15 points.");
}
else {
    console.log("Unknown alien color.");
}
//version 3
console.log("\nversion 3 velue assin is 'red'");
alienColor = "red";
if (alienColor == "green") {
    console.log("congratulations! You just earnd 5 points.");
}
else if (alienColor == "yellow") {
    console.log("congratulations! You just earnd 10 points.");
}
else if (alienColor === "red") {
    console.log("congratulations! You just earnd 15 points.");
}
else {
    console.log("Unknown alien color.");
}
//Q 27
var age = 2;
//test1
if (age == 2 && age <= 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//test 2
age = 4;
if (age === 2 && age < 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//test 3
age = 13;
if (age === 2 && age < 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//test 4
age = 20;
if (age === 2 && age < 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//test 5
age = 64;
if (age === 2 && age < 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//test 6
age = 65;
if (age === 2 && age < 2) {
    console.log("Age is ".concat(age, ": The person is a baby."));
}
else if (age > 2 && age <= 4) {
    console.log("Age is ".concat(age, ": The person is a toddler."));
}
else if (age > 4 && age <= 13) {
    console.log("Age is ".concat(age, ": The person is a Kid."));
}
else if (age > 13 && age <= 20) {
    console.log("Age is ".concat(age, ": The person is a teenager."));
}
else if (age > 20 && age < 65) {
    console.log("Age is ".concat(age, ": The person is a adult."));
}
else {
    console.log("Age is ".concat(age, ": The person is elder."));
}
//Q 28
var favoriteFruits = ["apple", "mango", "banana"];
//checks if statements
//Test 1
if (favoriteFruits.includes("apple")) {
    console.log("I Like Apple");
}
//test 2
if (favoriteFruits.includes("mango")) {
    console.log("I Like Mango");
}
//test 3
if (favoriteFruits.includes("banana")) {
    console.log("I Like Banana");
}
//test 4
if (favoriteFruits.includes("grape")) {
    console.log("I Like Grape");
}
//test 5
if (favoriteFruits.includes("orange")) {
    console.log("I Like Orange");
}
//Q 29
var groupPerson = ["Wajahat", "Ali", "Anus", "Usaid", "Ahmed"];
for (var index = 0; index < groupPerson.length; index++) {
    if (groupPerson[index] === "Wajahat") {
        console.log(" Hello \"".concat(groupPerson[index], "\", would you like to see a status report"));
    }
    else {
        console.log("Assalam u Alikum, such as Hello \"".concat(groupPerson[index], "\", thank you for logging in again"));
    }
}
//Q 30
console.log("\n");
var userName = ["Wajahat", "Ali", "Anus", "Usaid", "Ahmed"];
function greetUser(userName) {
    if (userName.length === 0) {
        console.log("We need to find some user!");
        return;
    }
    for (var index = 0; index < groupPerson.length; index++) {
        if (groupPerson[index] === "Wajahat") {
            console.log("Hello \"".concat(groupPerson[index], "\", would you like to see a status report"));
        }
        else {
            console.log("Assalam u Alikum, such as Hello \"".concat(groupPerson[index], "\", thank you for logging in again"));
        }
    }
}
console.log("for non empty username:\n");
greetUser(userName);
userName = [];
console.log("\n");
console.log("for  empty username:\n");
greetUser(userName);
//Q 31
var current_user = ["Ahmde", "Wajahat", "Anus", "Usaid", "Asad", "Asif"];
var new_user = ["ahmde", "wajahat", "anus", "mateen", "bilal", "hamid"];
function checkUserName(current_user, new_user) {
    var lowerCasedCurrentUser = current_user.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
        var newUser = new_user_1[_i];
        var lowerCasedNewUser = newUser.toLowerCase();
        if (lowerCasedCurrentUser.includes(lowerCasedNewUser)) {
            console.log("user name: \"".concat(newUser, "\" is already taken. Please enter a new  userName."));
        }
        else {
            console.log("Username \"".concat(newUser, "\" is available."));
        }
    }
}
checkUserName(current_user, new_user);
console.log("\n");
//Q 32
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    var ordiny = "";
    if (number === 1) {
        ordiny = "st";
    }
    else if (number === 2) {
        ordiny = "nd";
    }
    else if (number === 3) {
        ordiny = "rd";
    }
    else {
        ordiny = "th";
    }
    console.log("".concat(number).concat(ordiny));
}
//Q 33
var favouritePizzas = ["tomato", "garlic", "oregano "];
console.log("My favourite Pizza are:");
for (var pizza = 0; pizza < favouritePizzas.length; pizza++) {
    console.log(favouritePizzas[pizza]);
}
console.log("\nI Like these Pizzas:");
for (var pizza = 0; pizza < favouritePizzas.length; pizza++) {
    console.log("I Like ".concat(favouritePizzas[pizza], " pizza.}"));
}
console.log("\nI really love pizza!");
console.log("\n");
// Q 34
var animals = ["Cat", "Loin", "Dog", "Elephant"];
for (var ani = 0; ani < animals.length; ani++) {
    console.log("".concat(animals[ani]));
}
console.log("\n");
for (var ani = 0; ani < animals.length; ani++) {
    if (animals[ani] === "Cat") {
        console.log("What greater gift than the love of a \"cat\"");
    }
    else if (animals[ani] === "Loin") {
        console.log("A sheep never leads and the \"lion\" never follows.");
    }
    else if (animals[ani] === "Dog") {
        console.log("A \"dog\" is the only thing on earth that loves you more than you love yourself.");
    }
    else {
        console.log("\"Elephants\" are magnificent creatures.");
    }
}
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
//Q 35
console.log("\n");
var make_Tshirt = function (size, message) {
    console.log("Size: ".concat(size, ", Message: ").concat(message));
};
var size = "small";
var message2 = "CHOOSE LIFE";
make_Tshirt(size, message2);
make_Tshirt("Large", "CHOOSE LIFE");
//Q 36
function large_tshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    return console.log("size ".concat(size, " message ").concat(message));
}
// default output
console.log("\n");
large_tshirt();
// custom output
large_tshirt("small", "Hello Typescript");
//Q 37
console.log("\n");
function cities_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return console.log("city: ".concat(city, ",country: ").concat(country));
}
cities_country("Karachi");
cities_country("Lahore");
cities_country("Delhi", "India");
//Q 38
console.log("\n");
function city_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karachi");
city_country("Lahore");
city_country("Delhi", "India");
//Q 39
//Q 40
console.log("\n");
var magicianName = [
    "Harry Houdini",
    "David Copperfield",
    "David Blaine",
    "Uri Geller",
    "Dynamo",
];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
console.log(show_magicians(magicianName));
//Q 41
console.log("\n");
var magicianName2 = [
    "Harry Houdini",
    "David Copperfield",
    "David Blaine",
    "Uri Geller",
    "Dynamo",
];
function show_magicians2(magician2) {
    for (var _i = 0, magician2_1 = magician2; _i < magician2_1.length; _i++) {
        var magician = magician2_1[_i];
        console.log(magician);
    }
}
function show_magicians3(magician4) {
    console.log(magician4);
}
function makeGreat(magician3) {
    for (var m = 0; m < magician3.length; m++) {
        console.log("The Great ".concat(magician3));
    }
}
var greaternames = makeGreat(magicianName2);
console.log("Original magician");
show_magicians(magicianName2);
console.log("\ngreat magician");
show_magicians3(greaternames);
