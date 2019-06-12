import Product from '../types/Product'
import ItemInWareHouse from '../types/ItemInWareHouse'

export default interface IWarehouse {
  checkItemInWarehouse(item: Product): Promise<ItemInWareHouse>
  returnItemToWarehouse(item: Product): Promise<ItemInWareHouse>
}