import { translateToMorse, translateToEnglish } from './functions.js';

describe('translateToMorse', () => {
    test('translates English text to Morse code correctly', () => {
        expect(translateToMorse('HELLO WORLD')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
        expect(translateToMorse('SOS')).toBe('... --- ...');
    });

    test('throws an error for unsupported characters', () => {
        expect(() => translateToMorse('Hello123')).toThrow('Input contains unsupported characters. Only letters and spaces are allowed.');
        expect(() => translateToMorse('Hi@')).toThrow('Input contains unsupported characters. Only letters and spaces are allowed.');
    });

    test('handles empty input', () => {
        expect(translateToMorse('')).toBe('');
    });
});

describe('translateToEnglish', () => {
    test('translates Morse code to English correctly', () => {
        expect(translateToEnglish('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
        expect(translateToEnglish('... --- ...')).toBe('SOS');
    });
    test('throws an error for invalid Morse code format', () => {
        expect(() => translateToEnglish('.. .. / ..-...')).toThrow('Invalid format, please enter valid Morse code.');
        expect(() => translateToEnglish('- .- / --..--')).toThrow('Invalid format, please enter valid Morse code.'); // Invalid sequence
    });
});
