import AddToCart from '../../use-cases/addToCart'

class ConcreteAddToCart extends AddToCart {
  async receiveFileFromCli(product){
    if(product){
      const isAdded = await this.add(product)
      console.log(`isAdded: ${isAdded}`)
    } else {
      console.error("commandLineOptions require product to be passed")
    }
  }
}

export default ConcreteAddToCart