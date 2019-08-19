import test from 'ava'
import RemoveFromCart from '../src/use-cases/removeFromCart'
import CartRepository from '../src/implementations/cartRepository/console'
import IWarehouse from '../src/entities/interfaces/warehouse'

class WarehouseEmpty implements IWarehouse{
  async checkItemInWarehouse(item){
    return false
  }
  async returnItemToWarehouse(item){
    return false
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

class ConcreteRemoveFromCart extends RemoveFromCart {}

let warehouseEmpty = new WarehouseEmpty()
let warehouseFull = new WarehouseFull()
let cartRepo = new CartRepository()
let cartShouldFail = new ConcreteRemoveFromCart(cartRepo, warehouseEmpty)
let cartShouldSucceed = new ConcreteRemoveFromCart(cartRepo, warehouseFull)

test("should not remove from cart when warehouse cant take item back", async t => {
  const added = await cartShouldFail.remove("test")
  t.is(added, false)
})

test("should remove from cart when warehouse can take item back", async t => {
  const added = await cartShouldSucceed.remove("test")
  t.is(added, true)
})