const mult = require('../src/mult')

it('should calculate correct mult', () => {
    const result = mult(3,5)
    expect(result).toBe(15)
}) 