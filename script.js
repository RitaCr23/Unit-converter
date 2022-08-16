//select input and each measure
//const inputNum = document.getElementById("input-number");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function convert() {
  const inputNum = document.querySelector("input").value;
  const feetToMeter = inputNum * 3.281;
  const meterToFeet = inputNum * 0.304;
  length.innerText = `${inputNum} meters = ${feetToMeter.toFixed(3)} feet | ${inputNum} feet = ${meterToFeet} meters`;
  const literToGalon = inputNum * 0.264;
  const galonToLiter = inputNum * 3.785;
  volume.innerText = `${inputNum} liters = ${literToGalon.toFixed(
    3
  )} gallons | ${inputNum} gallons = ${galonToLiter.toFixed(3)} liters`;
  const kiloToPound = inputNum * 2.204;
  const poundToKilo = inputNum * 0.453;
  mass.innerText = `${inputNum} kilograms = ${kiloToPound.toFixed(
    3
  )} pounds | ${inputNum} pounds = ${poundToKilo.toFixed(3)} kilograms`;
}
