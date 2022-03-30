// async and callbacks

function someCallback() {
	console.log('hi everybody 👋')
}

console.log('this runs first ⏰')
// delay the execution of that function using setTimeout
// setTimeout(someCallback, 2000)

const id = setTimeout(function () {
	console.log('hi everybody 👋')
}, 2000)

// cancel that timeout
clearTimeout(id)

let counter = 1
let timeoutId;

function callback() {
	console.log(counter)
	timeoutId = setTimeout(callback, 1000)
	counter++
	// stop if the counter is higher than 3 
	if (counter > 3) {
		clearTimeout(timeoutId)
		console.log('counter finished')
	}
}
// callback()

// a better way to constantly call a function

// setInterval
let i = 1
// setInterval(function () {
// 	console.log(i)
// 	i++
// }, 1000)