import { Request, Response } from "express"
import connection from "../connection"

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {

    const {id, name, email, password } = req.body
    try {

        await connection("labecommerce_users")
        .insert({id, name, email, password})

         res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }
}