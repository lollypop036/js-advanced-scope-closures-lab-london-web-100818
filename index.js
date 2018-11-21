function produceDrivingRange(distance) {
    return function blockRange(a,b) {

    let pointA =  parseInt(a, 10)
    let pointB =  parseInt(b, 10)

    let range = pointB - pointA
     return range > distance ? `${range - distance} blocks out of range` : `within range by ${range}`
         
     }
    }

    function produceTipCalculator(tip) {
        return function tipPercentage(price) {
            return tip * price
        }
    }

    function createDriver(driverName) {
        let driverId = 0
             return class {
            constructor(driverName, id) {
            this.name = driverName
            this.id = ++driverId
            }
         }
        }
        
