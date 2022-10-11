import express from 'express'
import postRoutes from './routes/postRutes.js'

const app = express()

app.use(postRoutes) 

app.listen(3000)
console.log('rodando oioio', 3000)
