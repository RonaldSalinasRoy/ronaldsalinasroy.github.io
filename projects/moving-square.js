// Square Properties
let square = {
  width: 50,
  height: 50,
  X: 100,
  Y: 100,
  speed: 1
};

// init
drawCanvas();
displayCurrentSpeed();

document.addEventListener('keydown', event => {
  //console.log(event.keyCode)
  switch (event.keyCode){
    case 37:
      console.log("Left key pressed")
      moveLeft();
      break
    case 38:
      console.log("Up key pressed")
      moveUp();
      break
    case 39:
      console.log("Right key pressed")
      moveRight();
      break
    case 40:
      console.log("Down key pressed")
      moveDown();
      break
  }
})

// Initializes the canvas
function drawCanvas(){
  let canvas = document.getElementById("mainCanvas");
  let context = canvas.getContext('2d');

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawSquare();
}

// Moves the square left
function moveLeft(){
  if (square.X - square.speed >= 0){
    eraseSquare();
    square.X -= square.speed
    drawSquare();
  }
}

// Moves the square up
function moveUp(){
  if (square.Y - square.speed >= 0){
    eraseSquare();
    square.Y -= square.speed;
    drawSquare();
  }
}

// Moves the square right
function moveRight(){
  let canvas = document.getElementById("mainCanvas");
  if (square.X + square.width + square.speed <= canvas.width){
    eraseSquare();
    square.X += square.speed;
    drawSquare();
  }
}

// Moves the square down
function moveDown(){
  let canvas = document.getElementById("mainCanvas");
  if (square.Y + square.height + square.speed <= canvas.height){
    eraseSquare();
    square.Y += square.speed;
    drawSquare();
  }
}

// Changes the speed of the square from the number box
function setSpeed(){
  let speed = document.getElementById("speed").value;
  console.log("Speed: " + speed);
  if (speed > 10) {
    speed = 10;
  }
  else if (speed < 1){
    speed = 1
  }
  square.speed = speed;
  displayCurrentSpeed();
}

function displayCurrentSpeed(){
  document.getElementById("currSpeed").innerHTML = square.speed;
}

// Whites out the square's position
function eraseSquare(){
  let canvas = document.getElementById("mainCanvas");
  let context = canvas.getContext('2d');
  context.fillStyle = 'white';
  context.fillRect(square.X, square.Y, square.width, square.height);
}

// Draws the square
function drawSquare(){
  let canvas = document.getElementById("mainCanvas");
  let context = canvas.getContext('2d');
  context.fillStyle = 'black';
  context.fillRect(square.X, square.Y, square.width, square.height);
}
