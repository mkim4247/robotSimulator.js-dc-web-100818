class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }
  
  setCoordinates(x, y) {
    return this.coordinates.splice(0, 2, x, y)
    }

  setBearing(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      //not exactly sure if this is the intended way to 'throw an error'
      throw 'Invalid Robot Bearing'
    }
  }

  place(arg) {
    this.setCoordinates(arg.x, arg.y);
    this.setBearing(arg.direction);
  }


  turnRight() {
    if (directions.indexOf(this.bearing) === 3) {
      this.bearing = directions[0]
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    }
  }

  turnLeft() {
    if (directions.indexOf(this.bearing) === 0) {
      this.bearing = directions[3]
    } else {
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    }
  }

  advance() {
    let x = this.coordinates[0];
    let y = this.coordinates[1];
         if (this.bearing === 'north') { this.setCoordinates(x, y+1) } 
    else if (this.bearing === 'east')  { this.setCoordinates(x+1, y) } 
    else if (this.bearing === 'south') { this.setCoordinates(x, y-1) }
    else if (this.bearing === 'west')  { this.setCoordinates(x-1, y) }
  }

  translateInstructions(arg) {
    let instructions = Array.from(arg);
    for (let element of instructions) {
      if (element === 'L') {
        this.turnLeft();
      } else if (element === 'R') {
        this.turnRight();
      } else if (element === 'A') {
        this.advance();
      }
    }
  }
}

let directions = ['north', 'east', 'south', 'west']