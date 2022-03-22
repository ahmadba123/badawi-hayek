var ingredients1 = {
    x: 0,
    y: 1,
    z: 2,
  
    a: 10,
    b: 20,
    e: 30
  }
  
  var ingredients2 = {
    x: 0,
    y: 1,
    z: 2,
  
    a: 10,
    c: 20,
    d: 30
  }
  
  function getIntKeys(ingredients1, ingredients2){
  
      var k1 = Object.keys(ingredients1);
      return k1.filter(function(x){
          return ingredients2[x] !== undefined;
      });
  
  }
  
  console.log(getIntKeys(ingredients1, ingredients2));