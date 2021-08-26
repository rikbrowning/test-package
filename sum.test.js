const sum = require('./sum');

describe('sum', () => {
    it("should add one and two",()=>{
        expect(sum(1, 2)).toBe(3);
    })
});