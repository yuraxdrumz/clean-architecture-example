## Node.js + Typescript + AVA + Clean Architecture starter kit
This starter kit is build on top of Node.js + Typescript + AVA for testing + Clean Architecture.
The idea behind Clean Architecture is to have several distinct layers, so that you and your team's development time stays clear, modular and linear, wether your code base is small or large. For a more detailed explanation about Clean Architecture see [here](https://yuriktech.com/2019/06/11/Implementing-Clean-Architecture/).

Clean Architecture divides your code to 4 main layers:
  - Entities - These are your contracts, types, abstract classses and interfaces
  - Use-Cases - These are your application specific business rules, like `AddToCart` which does several things.
  - Implementations - This is where you prepare your use cases for the upper layer(frameworks-drivers), for example, you create an http implementation of `AddToCart` which wraps your `AddToCart` and expects a request.body which only exists when working with http.
  - Frameworks-Drivers - This is where you call all of your dependencies, initiate all of your concrete classes and connect everything.

Note that each layer can only talk to the layer beneath it and only it! This way your code will always stay modular and you can easily replace implementations of use-cases to whatever input/output you would like.

Adding a new use-case:
  1. Create appropriate entities
  2. Create your use-case with your application specific logic
  3. Pass all dependencies of your use-case through the contructor only!
  4. Create a new implementation which extends your use-case, like `HttpAddToCart` or `gRPCAddToCart` or whatever you like
  5. Create your frameworks-drivers `web.ts` or `gRPC.ts` if you dont have that already.
  6. Initiate all your implementations for that frameworks-drivers
  7. Tests!!!
