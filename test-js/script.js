const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};


let sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);
