const meter = document.querySelector('[data-js="meter"]');
const knob = document.querySelector('[data-js="knob"]');

let isMOuseDown;
knob.addEventListener("mousedown", (event) => {
  isMOuseDown = true;
  //   console.log("mousedown");
});

document.addEventListener("mouseup", (event) => {
  //   console.log("mouseup");
  isMOuseDown = false;
});

document.addEventListener("mousemove", (event) => {
  if (!isMOuseDown) return;
  console.log("moving");

  const mouseY = event.clientY;
  console.log(mouseY);
  const mousePercentage = mouseY / window.innerHeight;
  console.log(mousePercentage);
  //   meter.style.backgroundColor = "blue";
  knob.style.transform = `rotate(${mousePercentage}turn)`;
});

// console.log(event)

// function changeMeterLevel(e) {

// }

// y value on click
// increase y value (px) = height in %

// new MouseEvent("mousedown", screenY)
