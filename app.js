/* global ml5, createButton, text, height, brain, makeHead, speak */

function makeSmart () {
  brain.extractor = ml5.featureExtractor('MobileNet')
  brain.classifier = brain.extractor.classification(brain.eyes)

  const up = createButton('Up')
  up.mousePressed(learnUp)

  const down = createButton('Down')
  down.mousePressed(learnDown)

  const think = createButton('think')
  think.mousePressed(startThinking)
}

function learnUp () {
  brain.status = 'Learn up'
  brain.classifier.addImage('Up') // Label

  // No hold record
}

function learnDown () {
  brain.status = 'Learn down'
  brain.classifier.addImage('Down') // Label
}

function startThinking () {
  brain.status = 'Thinking...'
  brain.classifier.train(train)
}

function train (loss) {
  // loss is the opposite of accuracy
  if (loss > 0) {
    brain.status = loss

    // Keep training
  } else {
    brain.status = 'Playing'

    // Stop training
    // Start testing
    brain.classifier.classify(guess)
  }
}

function guess (error, result) {
  if (error) {
    console.log(error)
  } else {
    // console.log('result test:', result)
    // Show the user - Up or Down?
    brain.guess = result[0].label

    // Keep guessing
    brain.classifier.classify(guess)
  }
}

function makeApp () {
  makeHead()

  makeSmart()
}
window.setup = makeApp

function updateApp () {
  speak()

  text(brain.guess, 0, height - 10)
}
window.draw = updateApp
