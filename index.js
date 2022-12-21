import express from "express";
import { generateToken, authToken} from "./jwt.js"
import * as dotenv from 'dotenv'
import { logger } from "./logger.js";
dotenv.config()

const USERNAME = process.env.ACCOUNT
const PASSWORD = process.env.PASSWORD
const SECRET_KEY = process.env.SECRET_KEY
const expireTime = 1000 * 60 * 3

const app = express();
const port = 34567

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const appLogger = new logger()

app.get("/",(req,res)=>{
    appLogger.info(`${req.method}|URL:${req.url}|From:${req.hostname}`)
    res.send("Hello!")
})

app.post("/login", (req,res)=>{
    appLogger.info(`${req.method}|URL:${req.url}|From:${req.hostname}|Body-Data:${JSON.stringify(req.body)}`)
    let result = {
        status: false,
        message: "login fail!"
    }

    let username = req.body.username
    let password = req.body.password

    if( username===USERNAME && password===PASSWORD ){
        let payload = {
            username: username
        }
        
        let token = generateToken(SECRET_KEY, payload, expireTime)
        result.status = true
        result.token = token
        result.username = username
        result.message = "login success!"
    }
    
    res.json(result)
})

app.post("/auth",(req, res)=>{
    appLogger.info(`${req.method}|URL:${req.url}|From:${req.hostname}|Body-Data:${JSON.stringify(req.body)}`)
    let result = {
        status: false,
        message: "Auth Fail!"
    }

    let token = req.body.token
    let auth = authToken(token, SECRET_KEY)
    if(auth.status){
        let username = auth.username

        result.status = true
        result.message = "Auth Success!"
        result.token = generateToken(SECRET_KEY, {username: username}, expireTime)
        result.username = username
    }

    res.json(result)
})

app.listen(port, ()=>{
    console.log(`Server start at ${port}`)
})