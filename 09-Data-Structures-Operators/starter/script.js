"use strict";

// Data needed for a later exercise
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players; // 1.
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1; // 2.
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]; // 3.
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]; // 4.

const { team1, x: draw, team2 } = game.odds; // 5.
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  // 6.
  console.log(playerNames);
  console.log(`${playerNames.length} gol atildi.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} kazanir`); // 7.
team1 > team2 && console.log(`${game.team2} kazanir`);

console.log("**********************************************");

/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
} */

/* const skor = Object.entries(game.scored); */ // 1

for (const [no, gol] of game.scored.entries()) {
  console.log(`Goal ${no + 1}: ${gol} `);
}

let bahisler = Object.values(game.odds); // 2
let avaraj = 0;

for (const bahis of bahisler) {
  avaraj += bahis / bahisler.length;
}

console.log(avaraj.toFixed(2));

// 3

for (const [takim, sayi] of Object.entries(game.odds)) {
  const teamStr = takim === "x" ? "draw" : `victory ${game[takim]}`;
  console.log(`Odd of ${teamStr} ${sayi}`)
}

/* console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`)
console.log(`Odd of draw: ${game.odds.x}`)
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`) */

//4

console.log("**********************************************");



