import express from 'express'
import dotenv from 'dotenv'

const app = express()

// configurations
dotenv.config()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello From Server')
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

