const adder = function adder() {

  const run = function run(numberString) {
    let lastVal;

    return numberString
      .split('')
      .map((a) => parseInt(a))
      .reduce((accumulater, value, index, arr) => {
        let nextIndex = arr.length === index + 1 ? 0 : index + 1;

        if (value === arr[nextIndex]) {
          return accumulater + value;
        } else {
          return accumulater;
        }
      }, 0);
  }

  return {
    run: run
  }
};

module.exports = adder();
