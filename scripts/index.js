(function(){

  var app = angular.module('myapp', [ ]);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
    name: 'bloodstone',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut minus illo consequatur sit, ducimus cumque dolorum tempore obcaecati magni sequi, quibusdam blanditiis quo! Aspernatur consequatur alias fuga, ipsam dolores!",
    price: 90.87,
    icon: 'images/bloodstone-one.gif',
    canPurchase: true,
    images: [{path: 'images/bloodstone-two.gif'},
              {path: 'images/bloodstone-three.gif'}]
  },
  {
    name: 'Zarcon',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut minus illo consequatur sit, ducimus cumque dolorum tempore obcaecati magni sequi, quibusdam blanditiis quo! Aspernatur consequatur alias fuga, ipsam dolores!",
    price: 45.21,
    icon: 'images/zarcon-one.gif',
    canPurchase: true,
    images: [{path: 'images/zarcon-two.gif'},
              {path: 'images/zarcon-three.gif'}]
  },
  {
    name: "Diamond",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut minus illo consequatur sit, ducimus cumque dolorum tempore obcaecati magni sequi, quibusdam blanditiis quo! Aspernatur consequatur alias fuga, ipsam dolores!",
    price: 110.50,
    icon: 'images/diomand-three.png',
    canPurchase: true,
    images: []
  },
  {
    name: "Ruby",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut minus illo consequatur sit, ducimus cumque dolorum tempore obcaecati magni sequi, quibusdam blanditiis quo! Aspernatur consequatur alias fuga, ipsam dolores!",
    price: 103.70,
    icon: 'images/ruby-three.png',
    canPurchase: true,
    images: [{ path: 'images/ruby-two.png' }]
  
  }]
}());