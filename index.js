"use strict"

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { PORT, CLIENT_ORIGIN } = require("./config")
const { dbConnect } = require("./db-mongoose")

const app = express()

//import routes
const dogRouter = require("./routers/dog")
const catRouter = require("./routers/cat")
const refreshRouter = require("./routers/refresh")

// body parser
app.use(express.json())

app.use(
	morgan(process.env.NODE_ENV === "production" ? "common" : "dev", {
		skip: (req, res) => process.env.NODE_ENV === "test"
	})
)

app.use(
	cors({
		origin: CLIENT_ORIGIN
	})
)

//mount routes
app.use("/dog", dogRouter)
app.use("/cat", catRouter)
app.use("/refresh", refreshRouter)

function runServer(port = PORT) {
	const server = app
		.listen(port, () => {
			console.info(`App listening on port ${server.address().port}`)
		})
		.on("error", err => {
			console.error("Express failed to start")
			console.error(err)
		})
}

if (require.main === module) {
	// dbConnect()
	runServer()
}

module.exports = { app }
