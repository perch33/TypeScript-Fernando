(() => {
  let avenger: any = 123;
  let exist;
  let power;

  avenger = "Dr stranger";

  console.log((avenger as string).charAt(0));

  avenger = 12445435.45346;

  console.log((<number>avenger).toFixed(1));

  console.log(exist);
  console.log(power);
})();
