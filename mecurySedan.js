//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class car extends VehicleModule{
    constructor(make, model, year, milage) {
        super(make, model, year, milage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 700
        this.fuel = 20
        this.scheduleService = false

    }
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}



//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
