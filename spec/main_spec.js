var main = require("../main/main");
var res;
describe("99_bottles lyrics", function() {
    it("number === 1", function() {
        let answer = "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`";
        res = main(1);
        expect(res).toEqual(answer);
    });
    it("number <1", function() {
        let answer = "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`";
        res = main(-3456789);
        let answer = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
        res = main(num);

        expect(res).toEqual(answer);
    });
    it("number>99", function() {
        let answer = "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.";
        res = main(1234);
        expect(res).toEqual(answer);
    });
    it("0<number<100", function() {
        let answer = "12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.";
        res = main(12);
        expect(res).toEqual(answer);
    });
})