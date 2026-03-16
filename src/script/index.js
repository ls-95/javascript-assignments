function handleConversion() {
  let input = document.getElementById("temperature").value;
  let number = Number(input);
  let fahrenheit = number * 1.8 + 32;
  console.log(fahrenheit);
  let result = document.getElementById("result");
  result.textContent = `${fahrenheit}°F`;
}
