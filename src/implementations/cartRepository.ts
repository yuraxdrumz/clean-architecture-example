import ICartRepository from '../entities/interfaces/cartRepository'
import Product from '../entities/types/Product'
import AddedToCart from '../entities/types/AddedToCart'

class ConcreteCartRepository implements ICartRepository {
  async add(item: Product): Promise<AddedToCart> {
    console.log('adding item to database')
    return true
  }
  async remove(item: Product): Promise<AddedToCart> {
    console.log('removing item to database')
    return false
  }
}

export default ConcreteCartRepository