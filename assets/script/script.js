let currentRatingEl = document.getElementById("current-rating");
let currentTotalEl = document.getElementById("current-total");
let oneEl = document.getElementById("1");
let twoEl = document.getElementById("2");
let threeEl = document.getElementById("3");
let fourEl = document.getElementById("4");
let fiveEl = document.getElementById("5");
let value1 = document.getElementById("one");
let value2 = document.getElementById("two");
let value3 = document.getElementById("three");
let value4 = document.getElementById("four");
let value5 = document.getElementById("five");
let average = document.getElementById("average");
let tobeat = document.getElementById("tobeat");
let currentBtn = document.getElementById("current-btn");
let calculateNewBtn = document.getElementById("calculate-new-btn");
let tobeatBtn = document.getElementById("tobeatBtn");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let newTotal = [];
let newNumber = [];
let currentAvg = 0;

const starRatingContainer = document.querySelector(".rating");
const starRatingItem = document.querySelectorAll(".rating-item");
starRatingContainer.onclick = async (e) => {
  if (!e.target.classList.contains("active")) {
    starRatingItem.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }
  let rating = e.target.dataset.rate;
  if (!average.value) {
    alert("must enter value");
  }
  // console.log(rating * average.value);
  let a = currentRatingEl.value * currentTotalEl.value;
  let b = rating * average.value;
  if (!a) {
    alert("must enter value");
  }
  if (currentRatingEl.value > 5) {
    alert("max rating is 5");
  }
  if (currentRatingEl.value < 1) {
    alert("min is 1");
  }
  let c = a + b;
  // console.log(c);
  let d = parseInt(average.value) + parseInt(currentTotalEl.value);
  // console.log(average.value);
  // console.log(currentTotalEl.value);
  // console.log(d);
  let x = c / d;
  console.log(x);
  let zz = x.toFixed(0);
  result2.innerHTML = zz;
};

const calulateNew = () => {
  let a = currentRatingEl.value;
  let b = currentTotalEl.value;

  if (currentRatingEl.value > 5) {
    alert("max is 5");
  }
  if (currentRatingEl.value <= 1) {
    alert("min is 1");
  }

  let new0 = a * b;
  if (!new0) {
    alert("must enter value");
  }
  if (new0) {
    newTotal.push(new0);
    newNumber.push(parseInt(b));
  }

  let new1 = oneEl.value * value1.getAttribute("data-number");
  // console.log(new1);
  if (new1 != 0) {
    newTotal.push(new1);
    newNumber.push(parseInt(oneEl.value));
  }
  let new2 = twoEl.value * value2.getAttribute("data-number");
  // console.log(new2);
  if (new2 != 0) {
    newTotal.push(new2);
    newNumber.push(parseInt(twoEl.value));
  }
  let new3 = threeEl.value * value3.getAttribute("data-number");
  // console.log(new3);
  if (new3 != 0) {
    newTotal.push(new3);
    newNumber.push(parseInt(threeEl.value));
  }
  let new4 = fourEl.value * value4.getAttribute("data-number");
  // console.log(new4);
  if (new4 != 0) {
    newTotal.push(new4);
    newNumber.push(parseInt(fourEl.value));
  }
  let new5 = fiveEl.value * value5.getAttribute("data-number");
  // console.log(new5);
  if (new5 != 0) {
    newTotal.push(new5);
    newNumber.push(parseInt(fiveEl.value));
  }
  // console.log(newTotal);

  let sum1 = 0;
  for (let i = 0; i < newNumber.length; i++) {
    sum1 += newNumber[i];
  }
  console.log(sum1);
  let sum2 = 0;
  for (let i = 0; i < newTotal.length; i++) {
    sum2 += newTotal[i];
  }
  // console.log(sum2);

  currentAvg = (sum2 / sum1).toFixed(2);
  console.log(currentAvg);
  result1.innerHTML = currentAvg;
  newTotal = [];
  newNumber = [];
  currentAvg = 0;
};

calculateNewBtn.addEventListener("click", calulateNew);

const tobeatFn = () => {
  let a = currentRatingEl.value;
  let b = tobeat.value;
  console.log(b);
  let x = currentRatingEl.value * currentTotalEl.value;
  let y = tobeat.value * currentTotalEl.value;
  let z = (x - y) / (tobeat.value - 5);
  let zz = z.toFixed(0);
  if (!a || !b || !x || !y) {
    alert("must enter value");
  }
  if (a >= 5) {
    alert("already at max");
  } else if (b > 5) {
    alert("max is 5");
  } else if (a < 5 && b == 5) {
    alert("the max you could achieve is 4.99");
  } else if (b && b < a) {
    alert("above target");
  } else {
    console.log(zz);
    result3.innerHTML = zz;
  }
};

tobeatBtn.addEventListener("click", tobeatFn);
// this works
// console.log(currentRatingEl.value);
// console.log(currentTotalEl.value);
// console.log(oneEl.value);
// console.log(value1.getAttribute("data-number"));
// console.log(average.value);
// console.log(tobeat.value);
