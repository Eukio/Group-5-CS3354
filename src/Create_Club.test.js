const Create_Club = require('./Create_Club.js');

test('Valid Club', () => {
    expect(Create_Club('Hello', 'Ethan', 'This is a details. It is longer than 25 characters.')).toBe(true);
});

test('Invalid Club Details', () => {
    expect(Create_Club('Hello', 'Ethan', '')).toBe('Club details cannot be empty');
});

test('Invalid Club Leader', () => {
    expect(Create_Club('Hello', 12345, 'This is a details')).toBe('Club leader must only be alphabetical characters');
});

test('Empty Club Leader', () => {
    expect(Create_Club('Hello', '', 'This is a details')).toBe('Club leader cannot be empty');
});

test('Invalid Club Name', () => {
    expect(Create_Club('Hello this is a very long header that is more than 50 characters', 'Ethan', 'This is a details')).toBe('Club name must be less than 50 characters');
});




test('Empty Club Name', () => {
    expect(Create_Club('', 'Ethan', 'These are details')).toBe('Club name cannot be empty');
});

