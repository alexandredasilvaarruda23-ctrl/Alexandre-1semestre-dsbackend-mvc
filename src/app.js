const express = require("express")

const userController = require("./controllers/userController")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}



app.get("/", callbackDaRaiz)

app.get("/users", userController.getALLUsers)

module.exports = app
