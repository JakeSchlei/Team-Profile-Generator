
const Intern = require('../lib/Intern');
const testIntern = new Intern('Joe', 49, 'joemama@gmail.com', 'UW');

test('Can we get the interns name from getName', () => {
    expect(testIntern.getName()).toBe('Joe');
})

test('Can we get the interns Id from getId', () => {
    expect(testIntern.getId()).toBe(49);
})

test('Can we get the interns email from getEmail', () => {
    expect(testIntern.getEmail()).toBe('joemama@gmail.com');
})

test('Can we get the interns school via getSchool', () => {
    expect(testIntern.getSchool()).toBe('UW');
})