(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironMan: Avenger = {
    name: "iron man",
    weapon: "Armouit",
  };

  const captainAmerica: Avenger = {
    name: "capitan America",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironMan, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }

})()
