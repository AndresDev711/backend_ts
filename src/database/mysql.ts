import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_PORT,
    DB_NAME,
} from "../core/config/mysql";

export const connect = () => {
    const connection = createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        port: Number(DB_PORT),
        database: DB_NAME,
    })
    return connection
}

// export const conn = createPool({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASS,
//     port: DB_PORT,
//     database: DB_NAME,
// });