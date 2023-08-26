import { Request, Response } from "express";
import { connect } from '../../database/mysql'

export const getUser = async (_req: Request, res: Response) => {
    const conn = connect()
    const [response] = await conn.query('SELECT * FROM user_chat')
    return res.json({ response })
}

export const createUser = async (req: Request, res: Response) => {
    const conn = connect()
    const { user } = req.body
    const [response] = await conn.query("INSERT INTO user_chat (email, password, role_id) VALUES(?,?,?)", [
        user.email,
        user.password,
        user.role_id
    ])
    return res.json({ response })
}