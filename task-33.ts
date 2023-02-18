let numsArr: number[] = [];

for (let i = 1; i < 10; i++) {
  numsArr.push(i);
}

numsArr.map((num) => {
  if (num == 2 || num == 3) {
    console.log(num+"rd");
  } else {
    console.log(num+"th");
  }
})

export {};