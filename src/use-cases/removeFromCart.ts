import RemovedFromCart from '../entities/types/RemovedFromCart'
import Product from '../entities/types/Product'
import IRemoveFromCart from '../entities/interfaces/removeFromCart'

abstract class RemoveFromCart implements IRemoveFromCart {
  protected cartRepository
  protected warehouseService
  constructor(cartRepository, warehouseService){
    this.cartRepository = cartRepository
    this.warehouseService = warehouseService
  }

  async remove(item: Product): Promise<RemovedFromCart> {
    return false
  }

}

export default RemoveFromCart