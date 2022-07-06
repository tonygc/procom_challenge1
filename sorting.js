const personsArray = require('./data'); 
const _ = require('lodash');


const property=process.argv[2];
const sortedArray=_.orderBy(personsArray, [property]);
console.log({sortedArray});
