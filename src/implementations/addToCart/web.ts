import AddToCart from '../../use-cases/addToCart'

class ConcreteAddToCart extends AddToCart {
  async receiveProductFromWeb(request, response){
    // some custom code specific to this implementation
    if(request && request.body && request.body["item"]){
      // a call to our use case
      const isAdded = await this.add(request.body["item"])
      response.json(isAdded)
    } else {
      throw new Error("body is missing required field item")
    }
  }
}

export default ConcreteAddToCart