// EASY
function exercise(activity) {
  return function () {
    return "Today's exercise:" + " " + activity;
  };
}
var run = exercise("running");
console.log(run()); // prints "Today's exercise: running"

var swim = exercise("swimming");
console.log(swim()); // prints "Today's exercise: swimming"

// MEDIUM
function cutPizzaSlices(totalSlices) {
  return function (slicesDivided) {
    var slices = totalSlices / slicesDivided;
    return "Each person gets" + " " + slices + " " + "slices of pizza.";
  };
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"

// HARD
function dataSecurity(firstName, lastName, age) {
  let ssn = "123-45-6789";

  let pii = {
    getFirstName: function () {
      return firstName;
    },
    getLastName: function () {
      return lastName;
    },
    getAge: function () {
      return age;
    },
    getSSN: function () {
      return ssn;
    },
  };
  return pii;
}

let dataSecurityRandom = dataSecurity("Kellis", "Somerville", 22);
console.log(dataSecurityRandom.getFirstName()); // prints "Kellis"
console.log(dataSecurityRandom.getLastName()); // prints "Somerville"
console.log(dataSecurityRandom.getAge()); // prints "22"
console.log(dataSecurityRandom.getSSN()); // prints "123-45-6789"

// VERY HARD
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Running is fun! - said no one ever.");
  }
  fetchJob() {
    console.log(this.name + " " + "is a" + " " + this.job + ".");
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy == true) {
        console.log(this.name + " " + "can't accept any new tasks right now.");
    } else if (this.busy == false) {
        console.log(this.name + " " + "would love to take on a new responsibility.");
    }
  }
  learnLanguage(language) {
    this.languages.push(language);
  }
  listLanguages() {
    console.log(this.name + "'s" + " " + "known languages:" + " " + this.languages);
  }
}

const programmer1 = new Programmer("Jordan", "Coding Apprentice", 22, ["HTML", "Python", "JavaScript"]);

programmer1.fetchJob();

programmer1.completeTask();
programmer1.acceptNewTask();
programmer1.offerNewTask();
programmer1.completeTask();
programmer1.offerNewTask();

programmer1.learnLanguage("Java");
programmer1.listLanguages();

programmer1.learnLanguage("SQL");
programmer1.listLanguages();
