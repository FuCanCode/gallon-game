"use strict";

////// DOM Elements
// Unit 1
const upperWaterEl1 = document.querySelector(".upper-water-1");
const btnUpperFill1 = document.querySelector(".fill-upper-1");
const btnUpperEmpty1 = document.querySelector(".empty-upper-1");

const lowerWaterEl1 = document.querySelector(".lower-water-1");
const btnLowerFill1 = document.querySelector(".fill-lower-1");
const btnLowerEmpty1 = document.querySelector(".empty-lower-1");

const btnUp1 = document.querySelector(".up-1");
const btnDown1 = document.querySelector(".down-1");

// Unit 2
const upperWaterEl2 = document.querySelector(".upper-water-2");
const btnUpperFill2 = document.querySelector(".fill-upper-2");
const btnUpperEmpty2 = document.querySelector(".empty-upper-2");

const lowerWaterEl2 = document.querySelector(".lower-water-2");
const btnLowerFill2 = document.querySelector(".fill-lower-2");
const btnLowerEmpty2 = document.querySelector(".empty-lower-2");

const btnUp2 = document.querySelector(".up-2");
const btnDown2 = document.querySelector(".down-2");

// Unit 3
const upperWaterEl3 = document.querySelector(".upper-water-3");
const btnUpperFill3 = document.querySelector(".fill-upper-3");
const btnUpperEmpty3 = document.querySelector(".empty-upper-3");

const lowerWaterEl3 = document.querySelector(".lower-water-3");
const btnLowerFill3 = document.querySelector(".fill-lower-3");
const btnLowerEmpty3 = document.querySelector(".empty-lower-3");

const btnUp3 = document.querySelector(".up-3");
const btnDown3 = document.querySelector(".down-3");

// Unit 4
const upperWaterEl4 = document.querySelector(".upper-water-4");
const btnUpperFill4 = document.querySelector(".fill-upper-4");
const btnUpperEmpty4 = document.querySelector(".empty-upper-4");

const lowerWaterEl4 = document.querySelector(".lower-water-4");
const btnLowerFill4 = document.querySelector(".fill-lower-4");
const btnLowerEmpty4 = document.querySelector(".empty-lower-4");

const btnUp4 = document.querySelector(".up-4");
const btnDown4 = document.querySelector(".down-4");

// Fixed Values
const [upperMax1, upperMax2, upperMax3, upperMax4] = [3, 6, 9, 7];
const [lowerMax1, lowerMax2, lowerMax3, lowerMax4] = [5, 4, 7, 5];

// Global Variables
let [upperWaterLevel1, upperWaterLevel2, upperWaterLevel3, upperWaterLevel4] = [0, 0, 0, 0];
let [lowerWaterLevel1, lowerWaterLevel2, lowerWaterLevel3, lowerWaterLevel4] = [0, 0, 0, 0];

// Global Functions
const setWater = function (value, element) {
  element.style.height = `${value}em`;
};
const switchWater = function (destinationMax, origin, destination) {
  const capacity = destinationMax - destination;
  if (capacity) {
    if (origin > capacity) {
      destination += capacity;
      origin -= capacity;
    } else {
      destination += origin;
      origin = 0;
    }
  }
  return [origin, destination];
};

/////// Button Actions
// Unit 1
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
  [lowerWaterLevel1, upperWaterLevel1] = switchWater(upperMax1, lowerWaterLevel1, upperWaterLevel1);

  setWater(upperWaterLevel1, upperWaterEl1);
  setWater(lowerWaterLevel1, lowerWaterEl1);
});

btnDown1.addEventListener("click", function () {
  [upperWaterLevel1, lowerWaterLevel1] = switchWater(lowerMax1, upperWaterLevel1, lowerWaterLevel1);
  setWater(upperWaterLevel1, upperWaterEl1);
  setWater(lowerWaterLevel1, lowerWaterEl1);
});
