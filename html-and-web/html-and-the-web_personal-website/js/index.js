const meter = document.querySelector('[data-js="meter"]');
const knob = document.querySelector('[data-js="knob"]');

let isMouseDown;
let startingPosition;
let startingOffset;

knob.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  // startingPosition = (window.innerHeight - event.clientY) / window.innerHeight;
  console.log(startingPosition);
  startingOffset = 1 - startingPosition;
  console.log(startingOffset);
});

document.addEventListener("mouseup", (event) => {
  isMouseDown = false;
  startingPosition = (window.innerHeight - event.clientY) / window.innerHeight;
  console.log(startingPosition);
});

document.addEventListener("mousemove", (event) => {
  const rotateAmount = (window.innerHeight - (event.clientY) / window.innerHeight) + startingOffset;

  if (isMouseDown) {
    // console.log(event.clientY);
    console.log(rotateAmount);
    knob.style.transform = `rotate(${rotateAmount}turn)`;

  } return;
});

// function findEndY() {

//     return endY
//     }

// const endY = findEndY()
// console.log(endY);

// return event.clientY;

// const amountMoved = endY - startingY
// console.log(amountMoved)

// meter.style.height = `${(800 - event.clientY)/3}px`

// document.addEventListener("mouseup", (event) => {

// })

// console.log(event)

// function changeMeterLevel(e) {

// }

// y value on click
// increase y value (px) = height in %

// new MouseEvent("mousedown", screenY)
