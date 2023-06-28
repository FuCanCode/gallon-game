"use strict";

// Units
const unit1 = {
  upperMax: 3,
  lowerMax: 5,
  upperLevel: 0,
  lowerLevel: 0,
  upperLevelEL: document.querySelector(".upper-container-1"),
  lowerLevelEL: document.querySelector(".lower-container-1"),
};

const unit2 = {
  upperMax: 6,
  lowerMax: 4,
  upperLevel: 0,
  lowerLevel: 0,
  upperLevelEL: document.querySelector(".upper-container-2"),
  lowerLevelEL: document.querySelector(".lower-container-2"),
};

const unit3 = {
  upperMax: 9,
  lowerMax: 7,
  upperLevel: 0,
  lowerLevel: 0,
  upperLevelEL: document.querySelector(".upper-container-3"),
  lowerLevelEL: document.querySelector(".lower-container-3"),
};

const unit4 = {
  upperMax: 7,
  lowerMax: 5,
  upperLevel: 0,
  lowerLevel: 0,
  upperLevelEL: document.querySelector(".upper-container-4"),
  lowerLevelEL: document.querySelector(".lower-container-4"),
};

// Functions
const setWater = function (obj) {
  obj.upperLevelEL.style.backgroundSize = `auto ${obj.upperLevel}em`;
  obj.lowerLevelEL.style.backgroundSize = `auto ${obj.lowerLevel}em`;
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
document.querySelector(".fill-upper-1").addEventListener("click", function () {
  unit1.upperLevel = unit1.upperMax;
  setWater(unit1);
});

document.querySelector(".empty-upper-1").addEventListener("click", function () {
  unit1.upperLevel = 0;
  setWater(unit1);
});

document.querySelector(".fill-lower-1").addEventListener("click", function () {
  unit1.lowerLevel = unit1.lowerMax;
  setWater(unit1);
});

document.querySelector(".empty-lower-1").addEventListener("click", function () {
  unit1.lowerLevel = 0;
  setWater(unit1);
});

document.querySelector(".up-1").addEventListener("click", function () {
  switchWater(unit1, "up");
});

document.querySelector(".down-1").addEventListener("click", function () {
  switchWater(unit1, "down");
});

// Unit 2
document.querySelector(".fill-upper-2").addEventListener("click", function () {
  unit2.upperLevel = unit2.upperMax;
  setWater(unit2);
});

document.querySelector(".empty-upper-2").addEventListener("click", function () {
  unit2.upperLevel = 0;
  setWater(unit2);
});

document.querySelector(".fill-lower-2").addEventListener("click", function () {
  unit2.lowerLevel = unit2.lowerMax;
  setWater(unit2);
});

document.querySelector(".empty-lower-2").addEventListener("click", function () {
  unit2.lowerLevel = 0;
  setWater(unit2);
});

document.querySelector(".up-2").addEventListener("click", function () {
  switchWater(unit2, "up");
});

document.querySelector(".down-2").addEventListener("click", function () {
  switchWater(unit2, "down");
});

// Unit 3
document.querySelector(".fill-upper-3").addEventListener("click", function () {
  unit3.upperLevel = unit3.upperMax;
  setWater(unit3);
});

document.querySelector(".empty-upper-3").addEventListener("click", function () {
  unit3.upperLevel = 0;
  setWater(unit3);
});

document.querySelector(".fill-lower-3").addEventListener("click", function () {
  unit3.lowerLevel = unit3.lowerMax;
  setWater(unit3);
});

document.querySelector(".empty-lower-3").addEventListener("click", function () {
  unit3.lowerLevel = 0;
  setWater(unit3);
});

document.querySelector(".up-3").addEventListener("click", function () {
  switchWater(unit3, "up");
});

document.querySelector(".down-3").addEventListener("click", function () {
  switchWater(unit3, "down");
});

// Unit 4
document.querySelector(".fill-upper-4").addEventListener("click", function () {
  unit4.upperLevel = unit4.upperMax;
  setWater(unit4);
});

document.querySelector(".empty-upper-4").addEventListener("click", function () {
  unit4.upperLevel = 0;
  setWater(unit4);
});

document.querySelector(".fill-lower-4").addEventListener("click", function () {
  unit4.lowerLevel = unit4.lowerMax;
  setWater(unit4);
});

document.querySelector(".empty-lower-4").addEventListener("click", function () {
  unit4.lowerLevel = 0;
  setWater(unit4);
});

document.querySelector(".up-4").addEventListener("click", function () {
  switchWater(unit4, "up");
});

document.querySelector(".down-4").addEventListener("click", function () {
  switchWater(unit4, "down");
});
