module.exports = function toReadable(number) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const numberToWords = (number) => {
    if (number < 20) return num[number];
    let digit = number % 10;
    if (number < 100)
      return tens[Math.floor(number / 10)] + (digit ? " " + num[digit] : "");
    if (number < 1000)
      return (
        num[Math.floor(number / 100)] +
        " hundred" +
        (number % 100 == 0 ? "" : " " + numberToWords(number % 100))
      );
    return (
      numberToWords(Math.floor(number / 1000)) +
      " thousand" +
      (number % 1000 != 0 ? "" + numberToWords(number % 1000) : " ")
    );
  };

  return numberToWords(number);
};
