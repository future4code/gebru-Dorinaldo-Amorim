import { Request, Response } from "express"
import connection from "../connection"

export default async function createPurchases(
    req: Request,
    res: Response
): Promise<void> {

    const { user_id, product_id, price, total_price } = req.body
    try {

        await connection("labecommerce_purchases")
            .insert({
                user_id,
                product_id,
                price,
                total_price
            }
            )

        res.status(201).end("SUSSEÇO")
    } catch (error) {
        res.status(500).end()
    }
}