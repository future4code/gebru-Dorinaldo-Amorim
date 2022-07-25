import { Request, Response } from "express"
import connection from "../connection"
import { product } from "../types"


export default async function getAllProducts(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, price, image_url } = req.query

      const result: product[] = await connection.raw("SELECT * FROM labecommerce_products")
      res.send(result[0])
    
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}