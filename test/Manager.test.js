
const Manager = require('../lib/Manager');
const testManager = new Manager('Bill', 38, 'billbill@gmail.com', 1400);

test('Can we get the managers name via getName', () => {
    expect(testManager.getName()).toBe('Bill');
});

test('Can we get the managers Id via getID', () => {
    expect(testManager.getId()).toBe(38);
});

test('Can we get the managers email via getEmail', () => {
    expect(testManager.getEmail()).toBe('billbill@gmail.com');
});

test('Can we get the managers Office Number via getOffice', () => {
    expect(testManager.getOffice()).toBe(1400)
})