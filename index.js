// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names;
}

function tailsNeverFails() {
  counter = 0
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
