import { Request, Response } from "express";
import { connect } from '../../database/mysql'

export const getUser = async (_req: Request, res: Response) => {
    const conn = connect()
    const [response] = await conn.query('SELECT * FROM user_chat')
    return res.json({ response })
}

export const createUser = (_req: Request, res: Response) => {
    return res.json('WELCOME TO MY API')
}