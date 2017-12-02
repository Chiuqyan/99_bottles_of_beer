var printer = require("../main/main");
var res;
describe("99_bottles lyrics", function() {
    it("number === 1", function() {
        let answer = "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n";
        res = printer(1);
        expect(res).toEqual(answer);
    });
    it("number <1", function() {
        let answer1 = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
        res = printer(-1234);

        expect(res).toEqual(answer1);
    });
    it("number>99", function() {
        let answer2 = "Too many bottles of beer!\n";
        res = printer(1234);
        expect(res).toEqual(answer2);
    });
    it("0<number<100", function() {
        let answer3 = "12 bottles of beer on the wall,12 bottles of beer.\nTake one down and pass it around,11 bottles of beer on the wall.\n";
        res = printer(12);
        expect(res).toEqual(answer3);
    });
})