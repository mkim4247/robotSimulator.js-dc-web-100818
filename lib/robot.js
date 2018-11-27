class Robot {
	//your solution here
  constructor(coordinates=[0,0], bearing="north"){
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y){
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(direction){
    let directions = ["north", "east", "south", "west"];

    if (directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(info){
    this.bearing = info.direction;
    this.coordinates[0] = info.x;
    this.coordinates[1] = info.y;
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    } else if (this.bearing === "east"){
      this.bearing = "south"
    } else if (this.bearing === "south"){
      this.bearing = "west"
    } else if (this.bearing === "west"){
      this.bearing = "north"
    }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    } else if (this.bearing === "west"){
      this.bearing = "south"
    } else if (this.bearing === "south"){
      this.bearing = "east"
    } else if (this.bearing === "east"){
      this.bearing = "north"
    }
  }

  advance(){
    if (this.bearing === "north"){
      this.coordinates[1] += 1
    } else if (this.bearing === "south"){
      this.coordinates[1] -= 1
    } else if (this.bearing === "east"){
      this.coordinates[0] += 1
    } else if (this.bearing === "west"){
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(arg){
    for(let i=0; i < arg.length; i++){
      if (arg.charAt(i) === "L"){
        this.turnLeft()
      } else if (arg.charAt(i) === "R"){
        this.turnRight()
      } else if (arg.charAt(i) === "A"){
        this.advance()
      }
    }
  }

}
