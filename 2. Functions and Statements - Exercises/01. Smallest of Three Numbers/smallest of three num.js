function findTheSmallestNum(num1, num2, num3) {
  let smallestNum = num1;
  if (smallestNum > num2) {
    smallestNum = num2;
  }
  if (smallestNum > num3) {
    smallestNum = num3;
  }

  console.log(smallestNum);
}

findTheSmallestNum(2, 2, 2);
