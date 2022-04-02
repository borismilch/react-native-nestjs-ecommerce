const toNarmalNumber = (num: number) =>
  num
    .toString()
    .split("")
    .map((item, idx, arr) =>
      idx % 3 === 0 && arr[idx + 1] ? item + ", " : item
    );

export default toNarmalNumber;
