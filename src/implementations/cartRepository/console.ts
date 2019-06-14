import ICartRepository from '../../entities/interfaces/cartRepository'
import Product from '../../entities/types/Product'
import AddedToCart from '../../entities/types/AddedToCart'
import RemovedFromCart from '../../entities/types/RemovedFromCart'

class ConcreteCartRepository implements ICartRepository {
  async add(item: Product): Promise<AddedToCart> {
    console.log('adding item to database')
    return true
  }
  async remove(item: Product): Promise<RemovedFromCart> {
    console.log('removing item from database')
    return true
  }
}

export default ConcreteCartRepository