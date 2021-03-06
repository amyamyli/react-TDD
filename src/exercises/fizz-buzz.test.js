import fizzBuzz from './fizz-buzz'

describe('should test FizzBuzz', () => {
  it('should return number when given number is not divisible by 3 or 5', function() {
    //given
    const number = 1
    //when
    const result = fizzBuzz(number)
    //then
    expect(result).toEqual('1')
  })
  it('should return Fizz when number divisible by 3', function() {
    //given
    const number = 3
    //when
    const result = fizzBuzz(number)
    //then
    expect(result).toBe('Fizz')
  })

  it('should return Buzz when number divisible by 5', function() {
    //given
    const number = 5
    //when
    const result = fizzBuzz(number)
    //then
    expect(result).toBe('Buzz')
  })

  it('should return FizzBuzz when number divisible by 5 and 3', () => {
    const number = 15

    const result = fizzBuzz(number)

    expect(result).toBe('FizzBuzz')
  })

  it('should throw error when number is invalid', () => {
    expect(() => fizzBuzz()).toThrowError('Invalid number')
  })
})
