import test from 'ava'
import AddToCart from '../src/use-cases/addToCart'
import CartRepository from '../src/implementations/cartRepository/console'
import IWarehouse from '../src/entities/interfaces/warehouse'

class WarehouseEmpty implements IWarehouse{
  async checkItemInWarehouse(item){
    return false
  }
  async returnItemToWarehouse(item){
    return true
  }
}

class WarehouseFull implements IWarehouse{
  async checkItemInWarehouse(item){
    return true
  }
  async returnItemToWarehouse(item){
    return true
  }
}

class ConcreteAddToCart extends AddToCart {}

let warehouseEmpty = new WarehouseEmpty()
let warehouseFull = new WarehouseFull()
let cartRepo = new CartRepository()
let cartShouldFail = new ConcreteAddToCart(cartRepo, warehouseEmpty)
let cartShouldSucceed = new ConcreteAddToCart(cartRepo, warehouseFull)

test("should not add to cart when warehouse does not have the item", async t => {
  const added = await cartShouldFail.add("test")
  t.is(added, false)
})

test("should add to cart when warehouse has the item", async t => {
  const added = await cartShouldSucceed.add("test")
  t.is(added, true)
})