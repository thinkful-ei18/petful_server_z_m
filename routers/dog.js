const express = require("express")
const router = express.Router()
const Dog = require("../db/db-control")

router.get("/", (req, res, next) => {
	const nextDog = Dog.getDog()
	res.json({ nextDog })
})
router.post("/", (req, res, next) => {
	console.log(req.body)
	res.json({ message: "success", body: req.body })
})
router.delete("/", (req, res, next) => {
	const adopted = Dog.dequeDog()
	res.json({ adopted })
})

module.exports = router
