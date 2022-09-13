
const Engineer = require('../lib/Engineer');
const testEngineer = new Engineer('Phil', 55, 'Philphil@gmail.com', 'philLip');

test('Can we get the engineers name from getName', () => {
    expect(testEngineer.getName()).toBe('Phil');
})

test('Can we get the engineers id via getId', () => {
    expect(testEngineer.getId()).toBe(55);
})

test('Can we get the engineers email via getEmail', () => {
    expect(testEngineer.getEmail()).toBe('Philphil@gmail.com');
})

test('Can we get the engineers github username via getGitHub', () => {
    expect(testEngineer.getGitHub()).toBe('philLip');
})