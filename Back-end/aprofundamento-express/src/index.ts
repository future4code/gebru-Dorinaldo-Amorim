import express from "express";
import { ToDo, todos } from './exercicio'


const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Pong!")
})

//exer4

app.get("/todos/completed/:isCompleted", (req, res) => {
  let isCompleted: any = req.params.isCompleted

  if (isCompleted === "true") {
    isCompleted = true
  } else if (isCompleted === "false") {
    isCompleted = false
  } else {
    res.send("Path param da tarefa deve ser 'true' ou 'false'")
  }

  const result = []

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === isCompleted) {
      result.push(todos[i])
    }
  }

  res.send(result)
})

//exer5

app.post("/todos", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newTodo: ToDo = {
    userId,
    id: Date.now(),
    title,
    completed: false
  }

  todos.push(newTodo)

  res.send(todos)
})

//exer6

app.put("/todos/:id/completed", (req, res) => {

  const id = Number(req.params.id)

  for (let todo of todos) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  }

  res.send(todos)
})

//exer7

app.delete("/todos/:id", (req, res) => {

  const id = Number(req.params.id)

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1)
    }
  }

  res.send(todos)
})

//exer8

app.get("/users/:userId/todos", (req, res) => {
  const userId = Number(req.params.userId)

  const result = []

  for (let todo of todos) {
    if (todo.userId === userId) {
      result.push(todo)
    }
  }

  res.send(result)
})

app.listen(3003, () => console.log("Servidor disponível em 3003"))








// const newUser = {
// 	id: generateId()
// 	......
// }