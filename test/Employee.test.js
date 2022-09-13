
const Employee = require('../lib/Employee')
const testEmp = new Employee('John', 25, 'johnjohn@gmail.com')

test('Can we get name via getName', () => {
    expect(testEmp.getName()).toBe('John')
});

test('Can we get the Employee ID via getId', () => {
    expect(testEmp.getId()).toBe(25)
});

test('Can we get the Employee Email via getEmail', () => {
    expect(testEmp.getEmail()).toBe('johnjohn@gmail.com')
});

