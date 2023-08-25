import express, { Application } from "express"
import morgan from 'morgan'
import indexRoutes from './features/routes/index.routes'
import userRoutes from './features/routes/users.routes'

export class App {
	private app: Application

	constructor(private port?: number | string) {
		this.app = express()
		this.settings()
		this.middeware()
		this.routes()
	}

	settings() {
		this.app.set('port', this.port || process.env.PORT || 3000)
	}

	middeware() {
		this.app.use(morgan('dev'))
	}

	routes() {
		this.app.use( indexRoutes)
		this.app.use('/api/v1/', userRoutes)
	}

	listen() {
		try {
			this.app.listen(this.app.get('port'))
		} catch (error) {
			console.error("error starting server: ${error}")
		}
		console.log("SERVER ON: 3000")
	}
}