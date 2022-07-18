import { config } from 'dotenv';
config();
import express from 'express'
import cors from 'cors'
const app = express()

//Start Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT)
})

//Database
import { dbConnect } from './config/Database.js'
dbConnect()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
import AuthRoutes from './app/routes/AuthRoutes.js'
import UserRoutes from './app/routes/UserRoutes.js'
import CartRoutes from './app/routes/CartRoutes.js'
import OrderRoutes from './app/routes/OrderRoutes.js'
import ProductRoutes from './app/routes/ProductRoutes.js'

app.use('/api/auth', AuthRoutes)
app.use('/api/user', UserRoutes)
app.use('/api/cart', CartRoutes)
app.use('/api/order', OrderRoutes)
app.use('/api/product', ProductRoutes)











