const fs  =require('fs')
const _  =require('lodash')
const stockClass = require('./StockClass')
const stock = new stockClass

var loc = 'Leicester';

console.log("\n\n********* NO LOCATION ********\n")
console.log('CHEAPEST ', stock.findCheapest())
console.log('BAYS ', stock.findBays())
console.log(stock.averagePrice())

console.log(`\n\n********* ${loc} ********\n`)

console.log('CHEAPEST ', stock.findCheapest(loc))
console.log('BAYS ',stock.findBays(loc))
console.log(stock.averagePrice(loc))