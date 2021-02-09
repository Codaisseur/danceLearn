/* global createButton, createCanvas, createCapture, VIDEO, background, text, height, brain, save, image */
// Proce55ing
// p5

function makeEyes () {
  // createCapture records a webcam
  // VIDEO is your webcam
  // createCapture(VIDEO) records your webcam
  brain.eyes = createCapture(VIDEO)
  brain.eyes.hide()
}

function makeMouth () {
  // A canvas is a webpage you can draw on
  // 1. The first argument is the width - 640 pixels (640)
  // 2. The second argument is the height - 550 pixels (550)
  brain.mouth = createCanvas(640, 550)
}

function makeFace () {
  makeEyes()
  makeMouth()
}

// window. means someone else's code uses it
window.setup = makeFace

function speak () {
  // Erase everything
  // 1. What color to fill with - white (255)
  background(255)

  // Draw the camera
  // 1. What to draw - webcam (brain.eyes)
  // 2. How far to the right - all the way on the left (0)
  // 3. How far from the top - all the way at the top (0)
  // 4. How wide - 640 pixels (640)
  // 5. How tall - 480 pixels (480)
  image(brain.eyes, 0, 0, 640, 480)

  // Draw the hints
  // 1. What text to show - Up, Down, Up, Down, etc. (brain.goal)
  // 2. How far to the right - all the way to the left (0)
  // 3. How far from the top - 50 pixels up from the bottom (50)
  text(brain.goal, 0, height - 50)

  // Draw the status
  text(brain.status, 0, height - 30)
}

window.draw = speak

// Test

function remember () {
  // save takes a picture of something
  // 1. What to take a picture of - the whole app the user can see
  // 2. What is the filename - snapshot.png
  save(brain.mouth, 'snapshot')
}

function makeEars () {
  // createButton makes a button
  // 1. What text goes on the button - Remember
  const button = createButton('Remember')
  button.mousePressed(remember)
}

function makeHead () {
  makeFace()
  makeEars()
}

window.setup = makeHead
