const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input;
  let expected;
  let actual;
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    actual = utils.trimProperties(input)
  })
  test('[1] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    expect(actual).toEqual(expected)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input;
  let expected;
  let actual;
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    actual = utils.trimPropertiesMutation(input)
  })
  test('[3] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(input).toEqual(actual)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const data = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const maxNum = utils.findLargestInteger(data)
    expect(maxNum).toEqual(3);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstCount = counter.countDown();
    expect(firstCount).toEqual(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toEqual(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next()
    expect(seasons.season).toEqual('summer')
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.season).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.season).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.season).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.season).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.season).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(10);
    expect(focus.odometer).toEqual(10)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(90)
    expect(focus.tank).toEqual(17)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    focus.refuel(2);
    expect(focus.tank).not.toBe(0)
    expect(focus.tank).toEqual(2)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(10)
    expect(focus.tank).toEqual(focus.tankSize)
    expect(focus.tank).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number')
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
