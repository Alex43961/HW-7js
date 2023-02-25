"use strict";
let isRunning = true;
while (isRunning) {
    const userFirstNumber = +prompt("Enter your first number");
    if (isNaN(userFirstNumber) || userFirstNumber == "") {
        alert("Something went wrong. Try again.");
    }
    else {
        isRunning = false;
    }
}
let isCount = true;
