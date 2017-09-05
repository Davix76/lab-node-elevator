/*jshint esversion: 6 */

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.position = "";
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];


  }

    start() {
      this.time = setInterval(() => this.update(), 1000);
    }


    stop() {
      clearInterval(this.time);
    }

    update() {
      this.log();
  }



  _passengersEnter(indexOf) {
    this.passengers.push(this.requests[indexOf]);
     this.requests.splice(indexOf,1); }

  _passengersLeave(indexOf) {
      this.servedPassengers.push(this.passengers[indexOf]);
        this.passengers.splice(indexOf,1);

   }


  floorUp() {
    if (this.floor < this.MAXFLOOR) {
         this.position = "up";
         this.floor++;
         console.log(this.direction);

   }

 }

   floorDown() {
     if (this.floor > 0) {
           this.position = "down";
           this.floor--;
         }
   }

  call(person) {

    this.requests.push(this.waitingList,this.originFloor);



   }

  log() {
    console.log("Direction: "+this.position+" | Floor: "+this.floor);
    console.log(this.requests);
    console.log(this.passengers);

   }
}

module.exports = Elevator;
