`use strict`;

let randomNumber1 = Math.floor((Math.random() * 6) + 1); //generate random number
let randomImage = "dice" + randomNumber1 + ".png"; //How to get the file name
let imageSource = "images/" + randomImage; //How to get the image course and put together to change the images
let image1 = document.querySelectorAll("img")[0]; //select the first element of image at index 0
image1.setAttribute("src", imageSource); //change the image source based on the numbers





let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomImage2 = "dice" + randomNumber2 + ".png";
let imageSource2 = "images/" + randomImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);


// Declare the winner: 


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Draw";
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}