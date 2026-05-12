const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}



app.get("/", callbackDaRaiz)

app.get("/users", userController.getALLUsers)

app.post("/users", userController.createUser)

module.exports = app
