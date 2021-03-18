'Hello world'

const message = 'Hello world'
console.log('Message:', message)

const goal = 'Start the game'
console.log('Goal:', goal)

const brain = {
  status: 'Collect data',
  goal: goal,
  hint: 0,
  points: 0,
  max: 0,
  time: Date.now()
}
console.log('Status:', brain.status)
console.log('Brain.goal:', brain.goal)

const hints = ['Up', 'Down', 'Up', 'Down', 'Up', 'Up', 'Down', 'Down']
console.log('First:', hints[0])

function setGoal () {
  const now = Date.now()
  const difference = now - brain.time
  console.log('difference test:', difference)
  brain.time = now

  if (brain.status === 'Playing') {
    const correct = brain.goal === brain.guess

    if (correct) {
      // console.log('Correct', brain.guess)

      brain.points = brain.points + 1
    } else {
      // console.log('Incorrect', brain.guess, brain.goal)
    }

    brain.max = brain.max + 1

    console.log('Points:', brain.points, brain.max)
  }

  brain.goal = hints[brain.hint]
  // Pick the next goal
  brain.hint = brain.hint + 1
  // Bring around the circle
  brain.hint = brain.hint % hints.length
}
setGoal() // Up
setGoal() // Down

setInterval(setGoal, 2000)
