import express, { Application } from "express"

export class App {
	private app: Application

	constructor() {
		this.app = express()
	}

	listen() {
		try {
			this.app.listen(3000)
		} catch (error) {
			console.error("error starting server: ${error}")
		}
		console.log("SERVER ON: 3000")
	}
}