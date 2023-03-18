'use strict'

var shoping = function(){

    console.log('hi');
    
     function Products  (id,name,price){
        this.id = Math.floor(Math.random()*90000) + 10000;
        this.name = name;
        this.price = price;
        


    };
    
    Products.prototype.getInfo = function () {
      var firstName = this.name[0].toUpperCase();
      var lastName = this.name[this.name.length - 1].toUpperCase()
      var result = firstName + lastName + this.id + ', ' + this.name + ', ' + this.price;
      return result;
    }
  
    let milk = new Products (1, 'Milk', 22)

    console.log(milk.getInfo());
        


    

    

     function ShoppingBag  (productList){
        return productList=[];
    };
 






}();