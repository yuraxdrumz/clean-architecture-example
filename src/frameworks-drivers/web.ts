import express from 'express'
import bodyParser from 'body-parser'

import CartRepositoryImpl from '../implementations/cartRepository'
import WarehouseImpl from '../implementations/warehouse'
import AddToCartWebImpl from '../implementations/addToCartWeb'
import RemoveFromCartWebImpl from '../implementations/removeFileWeb'

const app = express()
const cartRepo = new CartRepositoryImpl()
const warehouse = new WarehouseImpl()
const addToCartInstance = new AddToCartWebImpl(cartRepo, warehouse)
const removeFromCartInstance = new RemoveFromCartWebImpl(cartRepo, warehouse)

app.use(bodyParser.json())

app.post('/item', async (req,res,next)=>{
  try{
    await addToCartInstance.receiveFileFromWeb(req, res)
  }catch(e){
    next(e)
  }
})

app.delete('/item', async (req,res,next)=>{
  try{
    await removeFromCartInstance.removeFileFromWeb(req, res)
  }catch(e){
    next(e)
  }
})

app.listen(process.env.PORT, ()=>{
  console.log(`listening on port ${process.env.PORT}`)
})