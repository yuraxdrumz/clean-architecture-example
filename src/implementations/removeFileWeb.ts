import RemoveFromCart from '../use-cases/removeFromCart'

class ConcreteRemoveFromCart extends RemoveFromCart {
  async removeFileFromWeb(request, response){
    // some custom code specific to this implementation
    if(request && request.body && request.body["item"]){
      // a call to our use case
      const isRemoved = await this.remove(request.body["item"]["item"])
      response.json(isRemoved)
    } else {
      throw new Error("body is missing required field item")
    }
  }
}

export default ConcreteRemoveFromCart