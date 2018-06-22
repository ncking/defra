const fs = require('fs')
const _ = require('lodash')



module.exports = class {

    constructor() {
        this.data = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf8'))
    }

    findCheapest(location = null) {
        let arr = this.filterLocation(location);
        if (!arr.length)
            return ''
        return _.min(arr.map((rec) => rec.price))
    }

    averagePrice(location = null) {
        let arr = this.filterLocation(location)
        if (!arr.length)
            return 0
        let total = arr.reduce((total, rec) => total + Number(rec.price), 0)
        return Math.floor(total / arr.length);
    }

    findBays(location = null) {
        let bays = []
        let arr = this.filterLocation(location)
        if (!arr.length)
            return ''
        arr = _.sortBy(arr, (rec) => rec.bay)

        function createBayRange(bay) {
            let range = {
                min: bay,
                max: bay
            }
            bays.push(range)
            return range
        }

        let currentRange = createBayRange(arr[0].bay)
        for (let i = 0; i < arr.length; i++) {
            let bayNum = arr[i].bay
            if (bayNum > currentRange.max + 1) {
                currentRange = createBayRange(bayNum)
            } else {
                currentRange.max = bayNum
            }
        }
        return bays.map(function (rec) {
            return rec.max > rec.min ? rec.min + '-' + rec.max : rec.min
        }).join(',')
    }

    filterLocation(location = null) {
        return !location ? this.data : _.filter(this.data, (item) => location.toUpperCase() === item.location.toUpperCase())
    }

}


 