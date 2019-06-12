import AddedToCart from '../types/AddedToCart'
import Product from '../types/Product'

export default interface IAddToCart {
  add(item: Product): Promise<AddedToCart>
}