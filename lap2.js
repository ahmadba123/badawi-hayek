function isPlainObject(x) {

 
    if (typeof x === 'object')
        console.log('true');

    else
        console.log('no it s not an object');
}

console.log(isPlainObject({name:"ahmad"}))