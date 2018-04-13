const express = require("express")
const router = express.Router()
const Dog = require("../db/db-control")

router.get("/", (req, res, next) => {
	const nextDog = Dog.getDog()
	res.json({ nextDog })
})
router.post("/", (req, res, next) => {
	const newDog = req.body
	Dog.enqueDog(newDog)
	res.json({ message: "success" })
})
router.delete("/", (req, res, next) => {
	const adopted = Dog.dequeDog()
	res.json({ adopted })
})

module.exports = router
