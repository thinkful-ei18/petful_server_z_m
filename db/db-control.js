const db = require("./mockdb")
const Queue = require("./queue")
let dogArray = db.dogArray.slice()
let catArray = db.catArray.slice()

let dogQue = new Queue()
let catQue = new Queue()
function init() {
	dogArray.forEach(dog => {
		dogQue.enqueue(dog)
	})
	catArray.forEach(cat => {
		catQue.enqueue(cat)
	})
}

function getDog() {
	if (dogQue.first) {
		return dogQue.first.value
	}
	return null
	// return dogArray[dogArray.length - 1]
}

function getCat() {
	if (catQue.first) {
		return catQue.first.value
	}
	return null
}

function dequeDog() {
	return dogQue.dequeue()
}

function dequeCat() {
	return catQue.dequeue()
}

init()

module.exports = {
	init,
	getDog,
	getCat,
	dequeDog,
	dequeCat
}
