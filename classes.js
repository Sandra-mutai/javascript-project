class Mkulima{
    constructor(product,order,vendor){
        this.farm=[];
        this.product=[];
        this.order=[];
        this.vendor=[];
        this.name="Jeannine"
        this.age=21


    }
    addFarm(id, farmName, farmer, phoneNumber, address){
        var farm={
            id:id,
            farmName:farmName,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,

        }
        return farm

       }
    removeFarm(id){
        this.farm.shift(id)
        return this.farm
    }
    updateFarm(id, farmName, farmer, phoneNumber, address){
    let  newFarm=this.farm.find(newFarm=>newFarm.address=="Karen")
      newFarm={
          id:id,
          farmName:farmName,
          phoneNumber:phoneNumber,
          address:address,
          farmer:farmer,

      }
      return newFarm
    }
getFarm(id){
    let anyFarm=this.farm.find(anyProduct=>anyProduct.id==id)
return id
}

addProduct(productId, name, prices){
    var product={
        productId:productId,
        name:name,
        prices:prices,
    }

    return product
}
removeProduc(productId){
    this.farm.shift(productId)
    return farm
}


updateProduct(productId, name, price){
    let  newProduct=this.farm.find(newProduct=>newProduct.name=="Karen")
    newProduct={
          productId:productId,
          name:name,
          prices:price,


}
return newProduct
}
getProduct(productId){
let anyProduct=this.farm.find(anyProduct=>anyProduct.productId==productId)
return productId
}

printProducts(products,prices){
    var farm={
        products:products,
        prices:prices,

    }
    return farm

   }

   calculateOrderCost(price, quantity){
    let  orderCost=this.farm.find(orderCost=>orderCost.productId==productId)
      console.log(`${price*quantity}`);
     return orderCost
      }
    }





let  farm=new Mkulima();
console.log(farm.addFarm(756,"Mulima","Karima",778989737,"Karen"));
let  fr=new Mkulima();
console.log(fr.addFarm(116,"Kulima","rima",778990837,"Nyeri"));

console.log(farm.removeFarm(756));
console.log(farm.updateFarm(23453,"Mulima","Gad","+3453436336","Kitale"));
console.log(farm.getFarm(116));
console.log(farm.addProduct(756,"Akandi",67000));
console.log(farm.updateProduct("3452DT","Corn",6800));
console.log("calculateOrderCost:"+""+farm.getProduct(5674));
console.log(farm.printProducts("Orange",600,"Mango",500,"Banana",700));
console.log(farm.calculateOrderCost(756,34))


