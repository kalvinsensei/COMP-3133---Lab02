const chai = require('chai')
const expect = chai.expect
const calculator = require('../app/calculator')

it('5 + 2 = 7 PASS', () => {
	expect(calculator.add(5, 2)).to.equal(7)
})
it('5 + 2 = 8 FAIL', () => {
    expect(calculator.add(5, 2)).to.equal(8)
})

it('5 - 2 = 3 PASS', () => {
    expect(calculator.sub(5, 2)).to.equal(3)
})
it('5 - 2 = 5 FAIL', () => {
    expect(calculator.sub(5, 2)).to.equal(5)
})

it('5 * 2 = 10 PASS', () => {
    expect(calculator.mul(5, 2)).to.equal(10)
})
it('5 * 2 = 12 FAIL', () => {
    expect(calculator.mul(5, 2)).to.equal(12)
})

it('10 / 2 = 5 PASS', () => {
    expect(calculator.div(10, 2)).to.equal(5)
})
it('10 / 2 = 2 FAIL', () => {
    expect(calculator.div(10, 2)).to.equal(2)   
})
