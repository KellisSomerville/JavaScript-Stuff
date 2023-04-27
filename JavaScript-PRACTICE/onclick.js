let car = {
  make: "Nissan",
  model: "GTR",
  color: "Grey",
  mileage: 3000,
  isWorking: true,

  driveToWork: () => {
    alert(` Old Mileage: ${car.mileage}`);
    console.log(car.mileage);
    car.mileage = car.mileage + 8;
    alert(` New Mileage : ${car.mileage}`);
  },

  driveAroundTheWorld: () => {
    alert(`Old Mileage: ${car.mileage}`);

    car.mileage = car.mileage + 24000;

    alert(`New Mileage: ${car.mileage}`);
    alert("The Car needs a tune-up");

    isWorking = false;
  },

  getTuneUp: () => {
    alert("Car is ready to go!");
    isWorking = true;
  },

  honk: () => {
    alert("BEEP BEEP!");
  },
};

let race = () => {
  alert("SKKKKUUUUUUUURRRRRTTT!");
  isWorking = false;
  alert("Car needs a tune-up");
};

document.onkeyup = (event) => {
  userInput = event.key.toLocaleLowerCase();

  if ((userInput = "f")) {
    race();
  }
};

document.onkeyup = (event) => {
  event.preventDefault();

  var userInput = event.key.toLocaleLowerCase();

  switch (userInput) {
    case (userInput = "w"):
      car.driveToWork();
      break;
    case (userInput = "e"):
      car.driveAroundTheWorld();
      break;
    case (userInput = "t"):
      car.getTuneUp();
      break;
    case (userInput = "h"):
      car.honk();
      break;
    case (userInput = "f"):
      race();
      break;
  }
};

document.getElementById("main-btn").addEventListener("click", () => {
  console.log("hello!");
  let favoriteCar = prompt("What is your favorite car?");
  document.querySelector(".fave-car").textContent = favoriteCar;
});

document.querySelector(".second-btn").addEventListener("click", () => {
  console.log("whats up");
});
