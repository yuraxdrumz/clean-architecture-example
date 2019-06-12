import AddedToCart from '../entities/types/AddedToCart'
import Product from '../entities/types/Product'
import IAddToCart from '../entities/interfaces/addToCart'

abstract class AddToCart implements IAddToCart {
  protected cartRepository
  protected warehouseService
  constructor(cartRepository, warehouseService){
    this.cartRepository = cartRepository
    this.warehouseService = warehouseService
  }

  async add(item: Product): Promise<AddedToCart> {
    return false
  }

}

export default AddToCart