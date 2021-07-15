/* Functions on Web Page */
function clicked() {
    alert("Thanks for clicking me :)");
}

function magic() {
    // innerHTML property gives us the "inside content" of an HTML element
    document.getElementById("magicId").innerHTML = "HAHAHAHAHAHAHA MAGIC!";
}

function redirect() {
    // open a new tab with target="_blank"
    window.open("https://google.com");

    // open a website in the same page
    // window.location.href = "https://google.com";
}

function hoverMagic(element) {
    /* we can ask for an argument, and then use 'this' on the function call to
    gain some simplicity to the code */
    element.setAttribute("src", "https://imagem.band.com.br/f_480959.jpg");
}

function hoverUnmagic(element) {
    element.setAttribute("src", "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697");
}

function getSelect(element) {
    // when you put an dot before an 'element' argument, you can navigate in his properties
    alert("You selected me! Option number " + element.value);
}

// /* Basic Commands */
// alert("Hello, World! It is working!");

// // Variables - String and Numbers
// var rdmName = "GitHub User";
// var phrase = "This is something, very very cool... Right, " + rdmName + "?";
// var num1 = 29;
// var num2 = 34;

// alert("Look in the console on Developer Tools, it wants to tell you something.");

// // Printing on Console
// console.log(num1 + " + " + num2 + " = " + (num1 + num2));
// console.log(phrase);

// // String Functions
// console.log(phrase.toUpperCase());
// console.log(phrase.toLowerCase());

/* Working with Lists and Arrays */

// // Modeling the Array
// var lista = ["apple", "wait", "orange"];

// lista.pop();                            // ==> .pop() function removes the last item from an array
// console.log(lista);
// console.log(lista.length);              // ==> .length returns quantity of an array

// lista.push("grape");                    // ==> .push() function adds a new item to the end of an array
// console.log(lista);
// console.log(lista.length);

// console.log(lista.reverse());           // ==> .reverse() function inverts the order of an array

// // Playing with Elements of an Array
// console.log(lista.toString());          // ==> .toString() converts a variable into a string
// console.log(lista.join(' | '));         // ==> .join() adds something betweent the elements of an array

// /* Dictionaries / Objects */
// var fruit = { name: "apple", color: "red" };
// console.log(fruit);

// // Lists of Dictionaries
// var fruits = [ fruit, { name: "grape", color: "purple" }];
// console.log(fruits);

// /* Conditionals */

// // If-Else-ElseIf
// var age = prompt("Hey user, how old are you?");

// if(age < 18) {
//     alert("You are under age! You still cannot drive.");

// } else if(age < 60) {
//     alert("You are of age! Let's go to beach?");

// } else {
//     alert("Would you like to buy a Harley Davidson, sir?");
// }

// /* Repetition Structures */

// // While
// var count = 0;
// while(count < 5) {
//     console.log(count);
//     count++;
// }

// // For
// for(let count = 0; count < 5; count++) {
//     console.log(count);
// }

// /* Date Object -- Constructor */
// var d = new Date;                   // we use 'new' when creating a constructor instance
// alert(d.getHours() + "h" + d.getMinutes() + "min" + d.getSeconds() + "s");

// /* Functions */
// function sum(n1, n2) {
//     return n1 + n2;
// }

// alert(sum(1, 1920));

// function setReplace(phrase, name, new_name) {
//     return phrase.replace(name, new_name);
// }

// alert(setReplace("Let's go Japan!", "Japan", "Brazil"));

// function verifyAge(age) {
//     if(age < 18) {
//         alert("You are under age! You still cannot drive.");
    
//     } else if(age < 60) {
//         alert("You are of age! Let's go to beach?");
    
//     } else {
//         alert("Would you like to buy a Harley Davidson, sir?");
//     }
// }

// verifyAge(27);