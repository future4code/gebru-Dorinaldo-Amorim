import express from "express";
import cors from "cors"
import { Product, products } from "./data"
import { AddressInfo } from "net";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("API online!")
  })

  
// Exercício 3 e 7
app.post("/products", (req, res) => {
    try {
      const name = req.body.name
      const price = req.body.price
  
      if (!name || !price) {
        throw new Error("Um ou mais campos faltando: 'name', 'price'")
      }
  
      if (typeof name !== "string") {
        throw new Error("O campo 'name' deve ser uma string")
      }
  
      if (typeof price !== "number" || price <= 0) {
        throw new Error("O campo 'price' deve ser um number e maior que zero")
      }
  
      const newProduct: Product = {
        id: Date.now().toString(),
        name,
        price
      }
  
      products.push(newProduct)
  
      res.send(products)
  
    } catch (error: any) {
      switch (error.message) {
        case "Um ou mais campos faltando: 'name', 'price'":
          res.status(422)
          break
        case "O campo 'name' deve ser uma string":
          res.status(422)
          break
        case "O campo 'price' deve ser um number maior que zero":
          res.status(422)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
  })
  
  // Exercício 4
  app.get("/products", (req, res) => {
    try {
      res.send(products)
  
    } catch (error: any) {
      res.send(error.message || "Erro inesperado")
    }
  })
  
  // Exercício 5 e 8
  app.put("/products/:id", (req, res) => {
    try {
      const id = req.params.id
      const newPrice = req.body.price
  
      if (!newPrice && newPrice !== 0) {
        throw new Error("Path param faltando: 'price'")
      }
  
      if (typeof newPrice !== "number" || newPrice <= 0) {
        throw new Error("O path param 'price' deve ser um number e maior que zero")
      }
  
      let isProductFound = false
  
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
          products[i].price = newPrice
          isProductFound = true
        }
      }
  
      if (!isProductFound) {
        throw new Error("Produto não encontrado")
      }
  
      res.send(products)
  
    } catch (error: any) {
      switch (error.message) {
        case "Path param faltando: 'price'":
          res.status(422)
          break
        case "O path param 'price' deve ser um number maior que zero":
          res.status(422)
          break
        case "Produto não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
  })
  
  // Exercício 6 e 9
  app.delete("/products/:id", (req, res) => {
    try {
      const id = req.params.id
  
      let isProductFound = false
  
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
          products.splice(i, 1)
          isProductFound = true
        }
      }
  
      if (!isProductFound) {
        throw new Error("Produto não encontrado")
      }
  
      res.send(products)
  
    } catch (error: any) {
      switch (error.message) {
        case "Produto não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
      
      res.send(error.message || "Erro inesperado")
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