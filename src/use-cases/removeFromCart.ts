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
    await this.cartRepository.remove(item)
    const isItemReturned = await this.warehouseService.returnItemToWarehouse(item)

    if(isItemReturned){
      await this.cartRepository.remove(item)
      return true
    }
    return false
  }

}

export default RemoveFromCart