import { Request, Response } from "express";

export const indexWelcome = (_req: Request, res: Response) => {
    return res.json('WELCOME TO MY API')
}

