import cors from 'cors'
import express from "express";
import {users, USER_ROLES, User} from './data'
import { AddressInfo } from "net";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in USER_ROLES) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }

      throw new Error("Invalid type")
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return res.status(204).send("No user was found")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(400).send('No found')
  }
})


app.post("/users", (req, res) => {
  try {
    const { name, email, age } = req.body
    let type = req.body.type as string
    
    if (!name || !email || !age || !type) {
      throw new Error("Missing data in body to create user")
    }

    if (typeof name !== "string") {
      throw new Error("Invalid name")
    }

    if (typeof email !== "string") {
      throw new Error("Invalid email")
    }

    if (typeof age !== "number") {
      throw new Error("Invalid age")
    }

    type = type.toUpperCase()
    if (!(type in USER_ROLES)) {
      throw new Error("Invalid type")
    }

    users.forEach(user => {
      if (user.email === email) {
        throw new Error("Email already exists")
      }
    })

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      type: type === USER_ROLES.NORMAL
        ? USER_ROLES.NORMAL
        : USER_ROLES.ADMIN
    }

    users.push(newUser)

    res.status(200).send({
      message: "user created successfuly",
      user: newUser
    })
  } catch (err) {
    res.status(400).send("user not created")
  }
})

//Exercício 2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//atravez da query params, porque é opcional passá-los

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//Sim, fazendo uma validação

//Exercício 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//Query params
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
// res.status(400).send("user not created")


app.post("/users", (req, res) => {
  try {
    const { name, email, age } = req.body
    let type = req.body.type as string
    
    if (!name || !email || !age || !type) {
      throw new Error("Missing data in body to create user")
    }

    if (typeof name !== "string") {
      throw new Error("Invalid name")
    }

    if (typeof email !== "string") {
      throw new Error("Invalid email")
    }

    if (typeof age !== "number") {
      throw new Error("Invalid age")
    }

    type = type.toUpperCase()
    if (!(type in USER_ROLES)) {
      throw new Error("Invalid type")
    }

    users.forEach(user => {
      if (user.email === email) {
        throw new Error("Email already exists")
      }
    })

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      type: type === USER_ROLES.NORMAL
        ? USER_ROLES.NORMAL
        : USER_ROLES.ADMIN
    }

    users.push(newUser)

    res.status(200).send({
      message: "user created successfuly",
      user: newUser // retorna o usuário criado
    })
  } catch (err) {
    res.status(400).send("user not created")
  }
})
//Exercício 4
//a. Mude o método do endpoint para PUT. O que mudou?
//a semantica do verbo
//b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//não, porque a convenção dita que novos itens em entidades sejam aplicados pelo POST, 
//enquanto PUT e PATCH sejam utilizados para edição completa e parcial, respectivamente


//Exercício 5
app.put("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-ALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send('user not changed')
  }
})

//Exercício 6
app.patch("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    users.forEach(user => {
      if (user.id === id) {
        user.name += "-REALTERADO"
        return res.status(200).end()
      }
    })
    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send()
  }
})

//Exercício 7
app.delete("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      throw new Error("Invalid id")
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1)
        return res.status(200).end()
      }
    }

    res.status(204).send("User not found")
  } catch (err) {
    res.status(400).send()
  }
})






const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;