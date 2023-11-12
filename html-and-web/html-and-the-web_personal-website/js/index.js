const meter = document.querySelector('[data-js="meter"]');
const knob = document.querySelector('[data-js="knob"]');

let isMouseDown;
let startingPosition;
let startingOffset;
let lastPosition = 1;
let rotatePercentage;
let rotateAmount;

// startingPosition = 1 or last position

knob.addEventListener("mousedown", (event) => {
  isMouseDown = true;

  startingPosition = (window.innerHeight - event.clientY) / window.innerHeight;
});

document.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    console.log(startingPosition);

    movePosition = (window.innerHeight - event.clientY) / window.innerHeight;
    console.log(`movePosition is: ${movePosition}`);
    console.log(`lastPosition is: ${lastPosition}`);

    if (lastPosition) {
      startingOffset = lastPosition - startingPosition;
      console.log(`startingOffset is: ${startingOffset}`);
    } else {
      startingOffset = 1 - startingPosition;
    }

    rotateAmount = movePosition + startingOffset;

    if (rotateAmount >= 0.6 && rotateAmount <= 1.4) {
      knob.style.transform = `rotate(${rotateAmount}turn)`;
      console.log(`rotation amount is: ${knob.style.transform}`);
    }
  }
  return;
});

document.addEventListener("mouseup", (event) => {
  isMouseDown = false;
  lastPosition = rotateAmount;
  console.log(lastPosition);
});
