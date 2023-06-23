"use strict";

// DOM Buttons
const btnUpperFill1 = document.querySelector(".fill-upper-1");
const btnUpperEmpty1 = document.querySelector(".empty-upper-1");
const btnLowerFill1 = document.querySelector(".fill-lower-1");
const btnLowerEmpty1 = document.querySelector(".empty-lower-1");
const btnUp1 = document.querySelector(".up-1");
const btnDown1 = document.querySelector(".down-1");

// Units
const unit1 = {
  upperMax: 3,
  lowerMax: 5,
  upperLevel: 0,
  lowerLevel: 0,
  upperLevelEL: document.querySelector(".upper-water-1"),
  lowerLevelEL: document.querySelector(".lower-water-1"),
};

// Functions
const setWater = function (obj) {
  obj.upperLevelEL.style.height = `${obj.upperLevel}em`;
  obj.lowerLevelEL.style.height = `${obj.lowerLevel}em`;
};

const switchWater = function (obj, direction) {
  let capacity;
  if (direction === "up") {
    capacity = obj.upperMax - obj.upperLevel;
    if (capacity) {
      if (obj.lowerLevel > capacity) {
        obj.upperLevel += capacity;
        obj.lowerLevel -= capacity;
      } else {
        obj.upperLevel += obj.lowerLevel;
        obj.lowerLevel = 0;
      }
    }
  } else {
    capacity = obj.lowerMax - obj.lowerLevel;
    if (capacity) {
      if (obj.upperLevel > capacity) {
        obj.lowerLevel += capacity;
        obj.upperLevel -= capacity;
      } else {
        obj.lowerLevel += obj.upperLevel;
        obj.upperLevel = 0;
      }
    }
  }
  setWater(obj);
};

///// Buttons
// Unit 1
btnUpperFill1.addEventListener("click", function () {
  unit1.upperLevel = unit1.upperMax;
  setWater(unit1);
});

btnUpperEmpty1.addEventListener("click", function () {
  unit1.upperLevel = 0;
  setWater(unit1);
});

btnLowerFill1.addEventListener("click", function () {
  unit1.lowerLevel = unit1.lowerMax;
  setWater(unit1);
});

btnLowerEmpty1.addEventListener("click", function () {
  unit1.lowerLevel = 0;
  setWater(unit1);
});

btnUp1.addEventListener("click", function () {
  switchWater(unit1, "up");
});

btnDown1.addEventListener("click", function () {
  switchWater(unit1, "down");
});

// Unit 2
// Unit 3
// Unit 4
