import program from 'commander'

import CartRepositoryImpl from '../implementations/cartRepository/console'
import WarehouseImpl from '../implementations/warehouse/console'
import AddToCartCliImpl from '../implementations/addToCart/cli'
import RemoveFromCartCliImpl from '../implementations/removeFromCart/cli'

program
  .option('-p, --product <name>', 'product name')
  .option('-a, --add', 'action')
  .option('-r, --remove', 'action')

program.parse(process.argv);

/**
 * to run this from typescript first run npm run dist and then node dist\index.js -p "test product name" -a or node dist\index.js -p "test product name" -r
 */

(async ()=>{
  const cartRepo = new CartRepositoryImpl()
  const warehouse = new WarehouseImpl()
  const addToCartInstance = new AddToCartCliImpl(cartRepo, warehouse)
  const removeFromCartInstance = new RemoveFromCartCliImpl(cartRepo, warehouse)

  if(!program.product){
    throw new Error("-p is required")
  }
  if(program.add){
    await addToCartInstance.receiveProductFromCli(program.product)
  } else if (program.remove){
    await removeFromCartInstance.removeProductFromCli(program.product)
  } else {
    throw new Error("-a or -r are required")
  }

})()


