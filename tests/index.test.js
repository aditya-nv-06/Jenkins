const sum = require("../index");

test("Test", () => { 
    expect(sum(10, 10)).toBe(20);
});

test("Test with negative numbers", () => { 
    expect(sum(-10, -10)).toBe(-20);
});

test("Test with zero", () => { 
    expect(sum(0, 0)).toBe(0);
});

test("Test with positive and negative numbers", () => { 
    expect(sum(10, -5)).toBe(5);
});

test("Test with large numbers", () => { 
    expect(sum(1000000, 1000000)).toBe(2000000);
});