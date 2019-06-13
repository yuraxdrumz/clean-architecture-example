import IWarehouse from '../../entities/interfaces/warehouse'
import Product from '../../entities/types/Product'
import AddedToCart from '../../entities/types/AddedToCart'

class ConcreteWarehouse implements IWarehouse {
  async checkItemInWarehouse(item: Product): Promise<AddedToCart> {
    console.log('adding item to warehouse')
    return true
  }
  async returnItemToWarehouse(item: Product): Promise<AddedToCart> {
    console.log('returning item to warehouse')
    return false
  }
}

export default ConcreteWarehouse