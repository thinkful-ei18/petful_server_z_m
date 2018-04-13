const express = require("express")
const router = express.Router()
const Dog = require("../db/db-control")

router.get("/", (req, res, next) => {
	const nextDog = Dog.getDog()
	res.json({ nextDog })
})

router.delete("/", (req, res, next) => {
	const adopted = Dog.dequeDog()
	res.json({ adopted })
})

module.exports = router
