// /*
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// */

let convertButton = document.getElementById("convert-btn");
let lenght = document.getElementById("lenght");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

convertButton.addEventListener("click", function () {
  let inputValue = document.getElementById("inputValue").value;
  let feetValue = inputValue * 3.281;
  let meterValue = inputValue / 3.281;

  let literValue = inputValue / 0.264;
  let gallonValue = inputValue * 0.264;

  let kilogramValue = inputValue * 2.204;
  let poundValue = inputValue / 2.204;

  lenght.textContent = `${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${meterValue} meters`;
  volume.textContent = `${inputValue} liters = ${gallonValue} gallons | ${inputValue} gallons = ${literValue} liters`;
  mass.textContent = `${inputValue} kilos = ${kilogramValue} pounds | ${inputValue} pounds = ${poundValue} kilos`;
});
