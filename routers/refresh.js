const express = require("express")
const router = express.Router()
const db = require("../db/db-control")
router.get("/", (req, res, next) => {
	db.init()
	res.json({ message: "success" })
})

module.exports = router
