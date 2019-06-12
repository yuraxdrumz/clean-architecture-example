import AddedToCart from '../types/AddedToCart'
import RemovedFromCart from '../types/RemovedFromCart'
import Product from '../types/Product'

export default interface ICartRepository {
  add(item: Product): Promise<AddedToCart>
  remove(item: Product): Promise<RemovedFromCart>
}