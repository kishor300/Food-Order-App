import { Sum } from "../sum"

test('Sum should return sum of 2 no.', () => {
    const result = Sum(2, 5);

    // Assertion
    expect(result).toBe(7);
});