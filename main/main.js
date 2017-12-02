module.exports = function main(num) {
    let countres;

    if (num > 1 && num < 100) {
        countres = String(num) + " bottles of beer on the wall," + String(num) + " bottles of beer.\nTake one down and pass it around," + String(num - 1) + " bottles of beer on the wall.\n";
    } else if (num === 1) {
        countres = "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n";
    } else if (num > 99) {
        countres = "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n";
    } else {
        countres = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    return countres;
}