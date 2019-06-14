import IWarehouse from '../../entities/interfaces/warehouse'
import Product from '../../entities/types/Product'
import AddedToCart from '../../entities/types/AddedToCart'
import RemovedFromCart from '../../entities/types/RemovedFromCart'

class ConcreteWarehouse implements IWarehouse {
  async checkItemInWarehouse(item: Product): Promise<AddedToCart> {
    console.log('adding item to warehouse')
    return true
  }
  async returnItemToWarehouse(item: Product): Promise<RemovedFromCart> {
    console.log('returning item to warehouse')
    return true
  }
}

export default ConcreteWarehouse