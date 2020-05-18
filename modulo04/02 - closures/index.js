function count() {
    var count = 1;
    return function() {
        var hi = 'HI';
    return count++;
    };
}
function main() {
    var value = count();
    console.log(value());
    console.log(value());
    console.log(value());
}
main();
