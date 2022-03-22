const theObject = { a: 1, c: "I don't know " };

const modifyObject = (x) => {

    let object = typeof x == 'object' && x.constructor == Object;
    if (!object) return "it's not an object"
    x['object'] = object;
    x['getPropertiesNb'] = Object.keys(x).length;
    return x
}

console.log(modifyObject(theObject));
console.log(modifyObject(444));
console.log(modifyObject("b"));