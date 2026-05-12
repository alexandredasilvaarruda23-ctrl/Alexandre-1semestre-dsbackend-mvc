const userModel = require("../models/userModel")

function getALLUsers(request, response) {
   const users = userModel.findALL()

   return response.json(users)
}

function createUser(req,res) {
   //const name = rteq.body.name
   const newUser = {
      id: Date.now(),
      name: name
   }

   const createdUser = userModel.create(newUser)

   return res.statatus(201).json(createUser)
}
module.exports = {
   createUser,
   getALLUsers
}


