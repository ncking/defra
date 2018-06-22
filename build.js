const fs = require('fs');
function readSplit(file) {
    let data = fs.readFileSync(__dirname + '/' + file, 'utf8');
    return data.trim().split("\n");
}
function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const cities = readSplit('cities.txt');
const makes = readSplit('makes.txt');


let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push({
        price: randomIntFromInterval(5000, 20000),
        location: cities[randomIntFromInterval(0, cities.length - 1)],
        make: makes[randomIntFromInterval(0, makes.length - 1)],
        bay : randomIntFromInterval(1, 50),
    })
}

fs.writeFileSync(__dirname + "/data.json", JSON.stringify(arr));