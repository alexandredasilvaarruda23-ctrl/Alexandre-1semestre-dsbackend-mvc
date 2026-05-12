  const userList = require("../data/users")
  
  
  const listaUsuarios = [
        {
            id: 1,
            name: "João"
        }
    ]

    const findALL = () => {
        return listaUsuarios
    }

    const create = (user) => {
        userList.push(user)

        return user
    }

    module.exports= {
        findALL,
        create

    } 