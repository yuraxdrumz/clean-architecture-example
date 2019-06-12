import AddedToCart from '../entities/types/AddedToCart'
import Product from '../entities/types/Product'

import IWarehouse from '../entities/interfaces/warehouse'
import ICartRepository from '../entities/interfaces/cartRepository'
import IAddToCart from '../entities/interfaces/addToCart'

abstract class AddToCart implements IAddToCart {
  protected cartRepository: ICartRepository
  protected warehouseService: IWarehouse
  constructor(cartRepository: ICartRepository, warehouseService: IWarehouse){
    this.cartRepository = cartRepository
    this.warehouseService = warehouseService
  }

  async add(item: Product): Promise<AddedToCart> {
    const isItemInWarehouse = await this.warehouseService.checkItemInWarehouse(item)
    if(isItemInWarehouse){
      await this.cartRepository.add(item)
      return true
    }
    return false
  }

}

export default AddToCart