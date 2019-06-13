import RemoveFromCart from '../../use-cases/removeFromCart'

class ConcreteRemoveFromCart extends RemoveFromCart {
  async removeFileFromCli(product){
    if(product){
      const isRemoved = await this.remove(product)
      console.log(`isRemoved: ${isRemoved}`)
    } else {
      console.error("commandLineOptions require product to be passed")
    }
  }
}

export default ConcreteRemoveFromCart