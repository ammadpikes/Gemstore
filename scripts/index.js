(function(){

  var app = angular.module('myapp', [ ]);
  app.controller('StoreController', function(){
    this.c = creator;
  });

  var creator = {
    name: "Ammad Ahmed",
    desig: "Software Engineer",
    company: "Pikessoft"
  }

}());