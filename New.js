// random number with given precision птичий метод
  const randomFloat = (min, max, precision) => {
    const random = Math.random() * (max - min) + min;
    return random.toFixed(precision);
}
console.log(randomFloat(2, 10, 2))


// random number without given precision правельный
    const randomInt = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum) + minimum)
console.log(randomInt(2, 10))



