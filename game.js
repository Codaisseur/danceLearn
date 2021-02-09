'Hello world'

const message = 'Hello world'
console.log('Message:', message)

const goal = 'Start the game'
console.log('Goal:', goal)

const brain = {
  status: 'Collect data', goal: goal, hint: 0
}
console.log('Status:', brain.status)
console.log('Brain.goal:', brain.goal)

const hints = ['Up', 'Down', 'Up', 'Down', 'Up', 'Up', 'Down', 'Down']
console.log('First:', hints[0])

function setGoal () {
  brain.goal = hints[brain.hint]
  console.log('Set:', brain.goal)

  // Pick the next goal
  brain.hint = brain.hint + 1
  // Bring around the circle
  brain.hint = brain.hint % hints.length
}
setGoal() // Up
setGoal() // Down

setInterval(setGoal, 5000)
