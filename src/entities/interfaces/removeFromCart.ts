import RemovedFromCart from '../types/RemovedFromCart'
import Product from '../types/Product'

export default interface IRemoveFromCart {
  remove(item: Product): Promise<RemovedFromCart>
}