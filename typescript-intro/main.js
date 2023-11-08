"use strict";
const fullName = "Jack Black";
const newAge = 32;
function createBirthdayGreeting(name, age) {
    return `Congratulation with staying alive for ${age} years ${name}!!`;
}
const birthdayGreeting = createBirthdayGreeting(fullName, newAge);
console.log(birthdayGreeting);
