// Code your solutions in this file

function printBadges(arr) {
  for(let i = 0; i < arr.length; i++) {
	   console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
  }

  return arr
}

function tailsNeverFails() {

  let tailsFlips = 0

  while( Math.random() >= 0.5 )  {
    tailsFlips++
  }

  return `You got ${tailsFlips} tails in a row!`
}
