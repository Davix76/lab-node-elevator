/*jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
let person =new Person ("David",2,8);

elevator.start();
