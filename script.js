"use strict";

// DOM Elements
const upperWaterEl1 = document.querySelector(".upper-water-1");
const btnUpperFill1 = document.querySelector(".fill-upper-1");
const btnUpperEmpty1 = document.querySelector(".empty-upper-1");

const lowerWaterEl1 = document.querySelector(".lower-water-1");
const btnLowerFill1 = document.querySelector(".fill-lower-1");
const btnLowerEmpty1 = document.querySelector(".empty-lower-1");

const btnUp1 = document.querySelector(".up-1");
const btnDown1 = document.querySelector(".down-1");

// Global Variables
let upperWaterLevel1 = 0,
  upperMax1 = 3,
  lowerWaterLevel1 = 0,
  lowerMax1 = 5;

// Global Functions
const setWater = function (value, element) {
  element.style.height = `${value}em`;
};

// Button Actions
btnUpperFill1.addEventListener("click", function () {
  upperWaterLevel1 = upperMax1;
  setWater(upperWaterLevel1, upperWaterEl1);
});

btnUpperEmpty1.addEventListener("click", function () {
  upperWaterLevel1 = 0;
  setWater(upperWaterLevel1, upperWaterEl1);
});

btnLowerFill1.addEventListener("click", function () {
  lowerWaterLevel1 = lowerMax1;
  setWater(lowerWaterLevel1, lowerWaterEl1);
});

btnLowerEmpty1.addEventListener("click", function () {
  lowerWaterLevel1 = 0;
  setWater(lowerWaterLevel1, lowerWaterEl1);
});

btnUp1.addEventListener("click", function () {
  const capacity = upperMax1 - upperWaterLevel1;
  if (capacity) {
    if (lowerWaterLevel1 > capacity) {
      upperWaterLevel1 += capacity;
      lowerWaterLevel1 -= capacity;
    } else {
      upperWaterLevel1 += lowerWaterLevel1;
      lowerWaterLevel1 = 0;
    }
  }
  setWater(upperWaterLevel1, upperWaterEl1);
  setWater(lowerWaterLevel1, lowerWaterEl1);
});

btnDown1.addEventListener("click", function () {
  const capacity = lowerMax1 - lowerWaterLevel1;
  if (capacity) {
    if (upperWaterLevel1 > capacity) {
      lowerWaterLevel1 += capacity;
      upperWaterLevel1 -= capacity;
    } else {
      lowerWaterLevel1 += upperWaterLevel1;
      upperWaterLevel1 = 0;
    }
  }
  setWater(upperWaterLevel1, upperWaterEl1);
  setWater(lowerWaterLevel1, lowerWaterEl1);
});
