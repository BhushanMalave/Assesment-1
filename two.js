let arr = [1, 2, [3, 4, [5]]];

let res = [];

const flatArr = (arr) => {
  return arr.reduce(function (a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatArr(b));
    }
    return a.concat(b);
  }, []);
};

console.log(flatArr(arr));
