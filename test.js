/*
console.log("Hej"); //sträng
console.log(2); //nummer
console.log(true); //boolean
console.log(false); //boolean

console.log(1+2); //addition
console.log(1-2); //subtraktion
console.log(1*2); //multiplikation
console.log(1/2); //division

var namn = "Ramin";
console.log(namn);

namn = "Samadi";
console.log(namn);

________________________________________________________
//1. Hello World\\

console.log("Hello World");

________________________________________________________
//2. Bonnie Tyler\\

console.log("Once upon a time");
console.log("I was falling in love");
console.log("Now I'm only falling apart");

________________________________________________________
//3. Bonnie Tyler part 2\\

console.log("Once upon a time \nI was falling in love \nNow I'm only falling apart");

________________________________________________________
//4. Första variabeln\\

var message = "Live and Sleep!";
console.log(message);

________________________________________________________
//5. Ada Lovelace\\

var username = "Ada Lovelace";
console.log("Hej", username + "!");

________________________________________________________
//6. Print Input\\

var ps = require("prompt-sync");
var prompt = ps();

let name1 = prompt("Enter your name: ");
console.log(name1);

________________________________________________________
//7. Triple Hello\\

var ps = require("prompt-sync");
var prompt = ps();

let input1 = prompt("Give input! ");

for (i = 0; i <= 2; i++) {
    console.log(input1);
}

________________________________________________________
//8. Hälsning\\

var ps = require("prompt-sync");
var prompt  = ps();

let name2 = prompt("What is your name? ");
console.log("Hello", name2 + "!");

________________________________________________________
//9. Samtal\\

var ps = require("prompt-sync");
var prompt = ps();

let conversation;

conversation = prompt("Hello, how are you? ");
conversation = prompt("Wonderful! What are you doing right now? ");
console.log("Thank you for sharing!");

________________________________________________________
//10. Namn Yrke\\

var ps = require("prompt-sync");
var prompt = ps();

console.log("I will tell a story, but I need some information.");

character = [
    username = prompt("Give a name for the main character: "),
    profession = prompt("Give the character a profession: ").toLowerCase()
];

console.log(
    "\nHere is the story:\nOnce upon a time there was a", character[1], "called", 
    character[0] + "\nOn his/her way to work,", character[0], "often pondered what being", 
    character[1], "meant to them.\nWhen you work as a", character[1],
    "you meet interesting people.\n" + character[0], "enjoys their work as a", character[1] + ", The end.\n"
);

________________________________________________________
//11. Print Variables\\

let days = 200;
let hours= 3.5;

console.log(
    "Days to summer:\n" + days + "\nHours to lunch:\n" + hours +
    "\nCoding is fun:" + "\nIt sure is!"
);

________________________________________________________
//12. Print Integer\\

var ps = require("prompt-sync");
var prompt = ps();

let integer = parseInt(prompt("Give a number! "));
console.log("You gave", integer);

________________________________________________________
//13. Print Double\\

var ps = require("prompt-sync");
var prompt = ps();

let float = parseFloat(prompt("Give a number! "));

if (typeof float === 'number' && !Number.isNaN(float) && !Number.isInteger(float)) {
    console.log("You gave", float);
}

________________________________________________________

//14. Print Truth\\

var ps = require("prompt-sync");
var prompt = ps();

let boolean = prompt("Give me the truth! ");

if (boolean == "true" || boolean == "false") {
    console.log(boolean.charAt(0).toUpperCase() + boolean.slice(1));
}

________________________________________________________
//15. Asking Multiple Inputs\\

var ps = require("prompt-sync");
var prompt = ps();

let string = prompt("Give a string: ");
let integer = parseInt(prompt("Give a integer: "));
let double = parseFloat(prompt("Give a double: "));
let boolean = prompt("Give a boolean: ");

console.log(
    "Your string:", string + "\nYour integer:", integer + 
    "\nYour double:", double + "\nYour boolean:", boolean
);

________________________________________________________
//16. Seconds In Days\\

var ps = require("prompt-sync");
var prompt = ps();

let days = parseInt(prompt("How many days? "));
console.log(days * 86400); //converts days to seconds

________________________________________________________
//17. Input Two Integers\\

let ps = require("prompt-sync");
let prompt = ps();

let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
console.log("The sum is", term1 + term2);

________________________________________________________
//18. Input Three Integers\\

let ps = require("prompt-sync");
let prompt = ps();

let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
let term3 = parseInt(prompt("Give the third number! "));

console.log("The sum is", term1 + term2 + term3);

________________________________________________________
//19. Sum of Two\\

console.log("Hej"); //sträng
console.log(2); //nummer
console.log(true); //boolean
console.log(false); //boolean

console.log(1+2); //addition
console.log(1-2); //subtraktion
console.log(1*2); //multiplikation
console.log(1/2); //division

var namn = "Ramin";
console.log(namn);

namn = "Samadi";
console.log(namn);

________________________________________________________
//20. Multiply Two\\

let ps = require("prompt-sync");
let prompt = ps();

let factor = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log(factor[0], "*", factor[1], "=", factor[0] * factor[1]);

________________________________________________________
//21. Average of Two\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log("The average is", (term[0] + term[1]) / 2);

________________________________________________________
//22. Average of Three\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseFloat(prompt("Give the first number! ")),    
    parseFloat(prompt("Give the second number! ")),
    parseFloat(prompt("Give the third number! "))
];

console.log("The average is", (term[0] + term[1] + term[2]) / 3);

________________________________________________________
//23. Tiny Calculator\\

let ps = require("prompt-sync");
let prompt = ps();

let number = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log(
    number[0], "+", number[1], "=", number[0] + number[1] + "\n" +
    number[0], "-", number[1], "=", number[0] - number[1] + "\n" +
    number[0], "*", number[1], "=", number[0] * number[1] + "\n" +
    number[0], "/", number[1], "=", number[0] / number[1]
)

________________________________________________________
//24. Speeding\\

let ps = require("prompt-sync");
let prompt = ps();

let speedMeter = parseFloat(prompt("Your speed: "));

if (speedMeter > 120) {
    console.log("Speeding!")
};

________________________________________________________
//25. Orwell\\

let ps = require("prompt-sync");
let prompt = ps();

let birthDate = parseInt(prompt("Give your age: "));

if (birthDate == 1899) {
    console.log("You're old")
};

________________________________________________________
//26. Too Old\\

let ps = require("prompt-sync");
let prompt = ps();

let birthDate = parseInt(prompt("Give your age: "));

if (birthDate < 1900) {
    console.log("You're old")
};
=======
let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
let term3 = parseInt(prompt("Give the third number! "));

console.log("The sum is", term1 + term2 + term3);

________________________________________________________
//27. Stay Positive\\

let ps = require("prompt-sync");
let prompt = ps();

let number = parseInt(prompt("Give a number "));

if (number >= 0) {
    console.log("It is positive");
}else if (number < 0) {
    console.log("It is not positive");
};

________________________________________________________
//28. Over Eighteen\\

let ps = require("prompt-sync");
let prompt = ps();

let age = parseInt(prompt("How old are you? "));

if (age >= 18) {
    console.log("You're an adult!");
}else if (age < 18) {
    console.log("You're underage!");
};

________________________________________________________
//29. Larger Number\\

let ps = require("prompt-sync");
let prompt = ps();

let number = [
    parseInt(prompt("Give the first number! ")),
    parseInt(prompt("Give the second number! "))
];

if (number[0] > number[1]) {
    console.log("The larger number is", number[0] + "!");
}else if (number[1] > number[0]) {
    console.log("The larger number is", number[1] + "!");
}else {
    console.log("They are equal!");
};

________________________________________________________
//30. Course Grading\\

let ps = require("prompt-sync");
let prompt = ps();

let percent = parseInt(prompt("Give your percent [0 - 100]: "));

if (percent < 0) {
    console.log("Impossible");
}else if (percent < 50) {
    console.log("Fail");
}else if (percent < 60) {
    console.log("Grade: 1");
}else if (percent < 70) {
    console.log("Grade: 2");
}else if (percent < 80) {
    console.log("Grade: 3");
}else if (percent < 90) {
    console.log("Grade: 4");
}else if (percent <= 100) {
    console.log("Grade: 5");
}else if (percent > 100) {
    console.log("Outstanding!");
};

________________________________________________________
//31. Even or Odd\\

let ps = require("prompt-sync");
let prompt = ps();

let number = parseInt(prompt("Give a number: "));

if (number % 2 === 0) {
    console.log("It is even.");
}else if (number % 2 === 1) {
    console.log("It is odd.");
};

________________________________________________________
//32. Enter Friend\\

let ps = require("prompt-sync");
let prompt = ps();

let question = prompt("Speak, friend, and enter! ");

if (question === "Mellon") {
    console.log("Welcome, friend");
}else {
    console.log("They've got a cave troll!");
};

________________________________________________________
//33. Echo\\
let ps = require("prompt-sync");
let prompt = ps();

let string = [
    prompt("Give the first string: "),
    prompt("Give the second string: ")
];

if (string[0] === string[1]) {
    console.log("Echo");
}else {
    console.log("Nej");
};

________________________________________________________
//34. Continue\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let question = prompt("Do you want continue? ");
    if (question === "yes" || question === "Yes") {
        break
    }else if (question === "no" || question === "No") {
        break
    };
};

________________________________________________________
//35. Answer to Life\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number === 42) {
        break
    };
};

________________________________________________________
//36. Power of Positivity\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number > 0) {
        console.log(number ** 2);
    }else if (number < 0) {
        console.log("That is negative");
    }else if (number === 0) {
        break
    };
};

________________________________________________________
//37. Counting Numbers\\

let ps = require("prompt-sync");
let prompt = ps();

let numberCount = 0;

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number === 0) {
        break
    }else {
        numberCount += 1;
    };
};

console.log("Total amount of numbers: ", numberCount);

________________________________________________________
//38. Counting Negatives\\

let ps = require("prompt-sync");
let prompt = ps();

let negativeValues = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else if (number < 0) {
        negativeValues += 1;
    };
};

console.log("Total amount of negative numbers:", negativeValues);

________________________________________________________
//39. Sum of Numbers\\

let ps = require("prompt-sync");
let prompt = ps();

let sum = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else {
        sum += number;
    };
};

console.log("Total sum of numbers:", sum);

________________________________________________________
//40. Amount and Sum\\

let ps = require("prompt-sync");
let prompt = ps();

let totalValues = 0;
let sum = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else {
        sum += number;
        totalValues += 1;
    };
};

console.log("Total sum of numbers:", sum);
console.log("Total amount of numbers:", totalValues);

________________________________________________________
//Ramin's calculator code\\

let ps = require("prompt-sync");
let prompt = ps();

console.log("\nHello and welcome to my first self-coded calculator.\nIn order for this calculator to work you have to input 2 values and choose your operator. \nIf you want to exit this program input 0 in the console and confirm with your enter key.\n")

while (true) { 
    let number1 = parseFloat(prompt("Input your 1st value: ")); if (number1 === 0) {break};
    let operator = prompt("Choose between these operators: (+-/^*) "); if (operator == "0") {break};
    let number2 = parseFloat(prompt("Input your 2nd value: ")); if (number2 === 0) {break};
    
    if (operator === "+") { //kan förbättras genom att göra en array som heter operators
        console.log(number1 + number2 + "\n");
    }else if (operator === "-") {
        console.log(number1 - number2 + "\n");
    }else if (operator === "*") {
        console.log(number1 * number2 + "\n");
    }else if (operator === "/") {
        console.log(number1 / number2 + "\n");
    }else if (operator === "^") {
        console.log(number1 ** number2 + "\n");
    };
};

________________________________________________________
//Sortera en array med siffror\\

function bubbleSort(array) {
    const arr = array.slice();
    for (i = 0; i < arr.length -1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            };
        };
    };
    return arr;

________________________________________________________
//For Of Loops\\

const names = ["John", "Bob", "Mary", "Joe"];

for (name of names) {
    console.log(name);
};

//For in Loops\\
const user = {"firstName:": "John", "lastName": "Doe"};

for (key in user) {
    console.log(user[key]);
};
};

const arr = [4, 2, 1, 6];
console.log("Old array:", arr);
console.log("New array:", bubbleSort(arr));

//For Each Loops\\
const animals = ["cat", "dog", "horse", "sheep", "bird"];

animals.forEach(animal => {
    console.log(animal);
});

break //breaks out of a loop
continue // skips the current loop and moves to the next loop
console.log(`The number is ${i}`); // write text without , or +
________________________________________________________
//Filter Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const itemNames = items.filter((item) => {
    return item.price <= 100;
});

console.log(items)
console.log(filteredItems);

________________________________________________________
//Map Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const itemNames = items.map((item) => {
    return item.name;
});

console.log(itemNames);

________________________________________________________
//Find Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const foundItem = items.find((item) => {
    return item.name === "Album";
});

console.log(foundItem);

________________________________________________________
//For Each\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

items.forEach((item) => {
    console.log(item.price);
});

________________________________________________________
//Some Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});

console.log(hasInexpensiveItems);

________________________________________________________
//Every Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000;
});

console.log(hasInexpensiveItems);

________________________________________________________
//Reduce Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log(total);

________________________________________________________
//Includes Method\\

const items = [1, 2, 3, 4, 5];

const includesTwo = items.includes(3);

console.log(includesTwo);

________________________________________________________
//Index Of\\

const schedules = ["Wake up", "Eat", "Film a video", "Watch things on netflix"];

console.log(schedules.indexOf("Film a video"));

________________________________________________________
//Objects\\

const person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function() {
    return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age);

const person = {
    name: "Daniel", 
    eyeColor: "Blue",
    age: 27,
    updateAge: function() {return ++person.age;}
};

console.log(person);

// object literals

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "Berlin",
    blogs: ["Why mac & cheese rules", "10 things to make with marmite"]
};

// user.age = 35;

console.log(user.age);

console.log(user["location"]);
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);

// object literals

const blogs = [
    { title: "Why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
];

console.log(blogs);

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "Berlin",
    blogs: [
        { title: "Why mac & cheese rules", likes: 30 },
        { title: "10 things to make with marmite", likes: 50 },
    ],
    login() {console.log("the user logged in");},
    logout() {console.log("the user logged out");},
    logBlogs() {
        console.log("This user has written the following blogs:");

        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
user.login();
user.logout();


const name = "mario";
console.log(name.toUpperCase());

// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.2;

console.log(Math.round(area)); // Rounds the value to the closest interger
console.log(Math.floor(area)); // Rounds the value to the lowest number
console.log(Math.ceil(area)); // Rounds the value to the highest number
console.log(Math.trunc(area)); // Removes what's after the decimal point

// random numbers

const randomNumber = Math.random(); //Random number between 0-1
console.log(Math.round(randomNumber * 100)); // Random number between 1-100

// primitive values

let scoreOne = 50;
const scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

scoreOne = 100
console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "chun-li";

console.log(userOne, userTwo);

*/