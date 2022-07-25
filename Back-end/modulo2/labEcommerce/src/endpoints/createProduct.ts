import { Request, Response } from "express"
import connection from "../connection"

export default async function createProduct(
    req: Request,
    res: Response
): Promise<void> {

    const {id, name, price, image_url } = req.body
    try {

        await connection.raw(`
        INSERT INTO labecommerce_products (id, name,  price, image_url)
        VALUES (
            "${id}",
            "${name}",
             ${Number(price)},
            "${image_url}"
        );
`);

        res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }
}