const student1= {
    name: 'hadi',
    age: 21,
  };
  
  const student2 = {
    name: 'ahmad',
    age: 25,
  };
  
  if (JSON.stringify(student1) === JSON.stringify(student2)) {
    console.log('ojects are equal');
  } else {
    console.log('objects are NOT equal');
  } 