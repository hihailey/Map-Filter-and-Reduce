const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 }
                ];
                
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

const ageAbove18 = (x) => {
    return x.age>18;
};


let ageAbove18List = people.filter(ageAbove18); //1. Filter all people above the age of 18 (use a function called ageAbove18)

const addCoffeeLoverProperty = (x) => {
    if(coffeeLovers.includes(x.name)){
        x.coffeLover = true;
    }else{
        x.coffeLover = false;
    }  
};

people.map(addCoffeeLoverProperty); //2. Transform the people array so all people in the array who are in coffeeLovers have a property
                                    //in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)

const ageReducer = (acc,x) => {
    return acc + x.age;
};

var totalNum = people.reduce(ageReducer,0); // total age

const findCoffeLoverProperty = (x) =>{
       return x.coffeLover == true;
}

const coffeeLoversAbove18  = ageAbove18List.filter(findCoffeLoverProperty);
const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer,0);
console.log(totalAgeOfCoffeeLoversAbove18);

