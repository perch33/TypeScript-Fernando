(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.push(11);

  console.log(numbers);

  const villanos = ["duende verde", "omega rojo", "dormamu"];

  villanos.forEach((v) => console.log(v.toUpperCase()));
  
  numbers.forEach((v) => console.log(v));


})();
