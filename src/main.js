const sum = (num1, num2) => num1 + num2

const sub = (num1, num2) => num1 - num2

const mult = (num1, num2) => num1 * num2

const div = (num1, num2) => (num2 === 0 ? 'Impossible to divide by 0' : num1 / num2)

export { sum, sub, mult, div }
