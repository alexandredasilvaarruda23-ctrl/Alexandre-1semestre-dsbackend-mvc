  const userList = require("../data/users")

 

    const findALL = () => {
        return userList
    }

    const create = (user) => {
        userList.push(user)

        return user
    }

    const findById = (id) => {
        return userList.find( user => user.id=== id)
    }

    module.exports= {
        findALL,
        create,
        findById
    } 

    