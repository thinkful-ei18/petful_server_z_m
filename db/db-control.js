const db = require("./mockdb")

let dogArray = db.dogArray
let catArray = db.catArray

function init() {
	dogArray = db.dogArray
	catArray = db.catArray
}

function getDog() {
	return dogArray[dogArray.length - 1]
}

function getCat() {
	return catArray[catArray.length - 1]
}

function dequeDog() {
	return dogArray.pop()
}

function dequeCat() {
	return catArray.pop()
}

module.exports = {
	init,
	getDog,
	getCat,
	dequeDog,
	dequeCat
}
