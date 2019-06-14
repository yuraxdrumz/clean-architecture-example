import RemovedFromCart from '../entities/types/RemovedFromCart'
import Product from '../entities/types/Product'


import IRemoveFromCart from '../entities/interfaces/removeFromCart'
import IWarehouse from '../entities/interfaces/warehouse'
import ICartRepository from '../entities/interfaces/cartRepository'

abstract class RemoveFromCart implements IRemoveFromCart {
  protected cartRepository: ICartRepository
  protected warehouseService: IWarehouse
  constructor(cartRepository, warehouseService){
    this.cartRepository = cartRepository
    this.warehouseService = warehouseService
  }

  async remove(item: Product): Promise<RemovedFromCart> {
    const isItemReturned = await this.warehouseService.returnItemToWarehouse(item)
    if(!isItemReturned) return false
    const isItemDeleted = await this.cartRepository.remove(item)
    if(!isItemDeleted) return false
    return true
  }

}

export default RemoveFromCart