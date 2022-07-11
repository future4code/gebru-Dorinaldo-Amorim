import { Request, Response } from "express"
import connection from "../connection"

export default async function getAllPurchases(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const result:any = await connection("labecommerce_purchases")
        .select("*")
      res.send(result)

   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}