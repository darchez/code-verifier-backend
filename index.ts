import express, { Express, Request, Response } from "express"
import dotenv from 'dotenv'

//configuration the .env file
dotenv.config()

//create  Express App
const app: Express = express()
const port: string | number = process.env.PORT || 8000

//define firts route of App
app.get('/', (req: Request,res: Response)=> {
    //send hello world
    res.send('Welcome to my APIRestful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})

//define firts route of App
app.get('/hello', (req: Request,res: Response)=> {
    //send hello world
    res.send('welcome to Get Route: hello world')
})

//Execute App and Listen requests to PORT
app.listen(port, ()=> {
    console.log(`Express Server Running at http://localhost:${port}`)
})
