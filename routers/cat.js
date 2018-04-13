const express = require("express")
const router = express.Router()
const Cat = require("../db/db-control")
router.get("/", (req, res, next) => {
	const nextCat = Cat.getCat()
	res.json({ nextCat })
})

router.post("/", (req, res, next) => {
	const newCat = req.body
	Cat.enqueCat(newCat)
})

router.delete("/", (req, res, next) => {
	const adopted = Cat.dequeCat()
	res.json({ adopted })
})

module.exports = router
