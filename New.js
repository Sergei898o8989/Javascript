

Number.random1 = function(min, max, precision) {
    var random = Math.random() * (max - min) + min;
    return random.toFixed(precision);
}
console.log(Number.random1(2, 10, 2))


Number.random = function(minimum, maximum) {
    minimum = minimum === undefined ? 0 : minimum;
    maximum = maximum === undefined ? 9007199254740992 : maximum;

    var random = Math.random() * (maximum - minimum) + minimum;

    return Math.floor(random);
}
console.log(Number.random(2, 10))