let arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const matrix = (n) => {
  let i;
  let j;
  let s = " ";
  let ind;
  let num;
  num = n - 1;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      ind = num + n * j;
      if (ind < 26) {
        s += arr[ind] + " ";
      } else {
        ind = n - (25 - (ind - n - 1));
        s += arr[ind] + " ";
      }
    }
    console.log(s);
    num--;
    s = " ";
  }
};

matrix(6);
