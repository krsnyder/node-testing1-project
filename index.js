function trimProperties(obj) {
  let keys = Object.keys(obj);
  const newObj = {}
  keys.forEach(key => {
    newObj[key] = obj[key].trim()
  })
  return newObj
}

function trimPropertiesMutation(obj) {
  let keys = Object.keys(obj);
  keys.forEach(key => {
    obj[key] = obj[key].trim()
  })
  return obj
}

function findLargestInteger(integers) {
  const arr = integers.map(k => {
    return Object.values(k)[0]
  })
  return Math.max(...arr);
}

class Counter {
  
  constructor(initialNumber) {
    this.count = initialNumber + 1;
  }
  countDown() {
    if (this.count > 0) { 
      this.count--;
    } else {
      return this.count
    }
    return this.count
  }
}

class Seasons {
  constructor() {
    this.season = '';
  }

  next() {
    if (this.season === '' || this.season === 'spring') {
      this.season = 'summer';
    } else if (this.season === 'summer') {
      this.season = 'fall';
    } else if (this.season === 'fall') {
      this.season = 'winter';
    } else {
      this.season = 'spring';
    }
    return this.season
  }
}

class Car {
  
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.name = name
    this.tankSize = tankSize
    this.mpg = mpg
  }

  drive(distance) {
    let range = this.tank * this.mpg;//range is equal to gallons times miles per gallon
    if (range > distance) { // enough gas for the range
      this.odometer += distance;
      this.tank -= (distance / this.mpg);
    } else {
      this.odometer += range;
      this.tank = 0;
    }
    return this.odometer;
  }

  refuel(gallons) {
    this.tank = (
      gallons + this.tank < this.tankSize
        ? gallons + this.tank
        : this.tankSize
    )
    let range = this.tank * this.mpg
    return range
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
