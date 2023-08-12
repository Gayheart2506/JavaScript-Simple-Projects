function myfunc(theObject){
    theObject.make  = "Toyota"; 
    theObject.year = 2023;
}

function add(a, b){
    sum = a + b;
    return sum;
}

const mycars = {
    make: "Honda",
    year: 1939,
    comment: "A very nice ride for girls" 
};

console.log(mycars.make);
console.log(mycars.comment);
myfunc(mycars)
console.log(mycars.make)
console.log(mycars.year)
console.log(mycars.comment)
console.log(add(100, 200));