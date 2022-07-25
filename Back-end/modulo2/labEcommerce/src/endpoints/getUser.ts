import { Request, Response } from "express"
import connection from "../connection"
import { character } from "../types"


export default async function getAllUser(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, email, password } = req.query

      const result: character[] = await connection.raw("SELECT * FROM labecommerce_users")
      res.send(result[0])
    
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}