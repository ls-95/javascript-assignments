function handleConversion() {
  let input = document.getElementById("temperature").value;
  let number = Number(input);
  let result = document.getElementById("result");

  if (isNaN(number) || input === "") {
    alert("Please enter a valid number");
    return;
  }
  let fahrenheit = Math.floor(number * 1.8 + 32);
  console.log(fahrenheit);
  result.textContent = `${fahrenheit}°F`;
}

//Exercise 1:
console.log("Hello, World!");

//Exercise 2;
let firstName = "Polly";
let age = 57;
let favouriteColor = "lavender";
console.log(
  `Hi! My name is ${firstName} and I am ${age} years old. My favourite colour is ${favouriteColor}.`,
);
