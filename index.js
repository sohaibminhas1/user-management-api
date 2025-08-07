const express = require("express")

const userRouter = require("./routes/user")

const {connectMongoDB} = require('./connection')

const logReqRes = require('./middleware/plugins')

const app = express()

const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/RESTAPI-DB")




app.use(express.urlencoded({extended : false}))

app.use(logReqRes("log.txt"))


app.use('/user', userRouter)

app.listen(PORT, () => console.log(`The Server has started working on port ${PORT}`))