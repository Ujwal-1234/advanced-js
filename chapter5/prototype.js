function Animal(name, energy) {
    let animal = {};
    animal.name = name;
    animal.energy = energy;
  
    animal.eat = function (amount) {
      console.log(`${this.name} is eating.`);
      this.energy += amount;
    };
  
    animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`);
      this.energy += length;
    };
  
    animal.play = function (length) {
      console.log(`${this.name} is playing.`);
      this.energy -= length;
    };
  
    return animal;
}
  
const leo = Animal("Leo", 7);
const snoop = Animal("Snoop", 10);

leo.sleep(5)
leo.eat(9)
leo.play(10)
snoop.eat(100)
snoop.play(50)




// Sample prototyping for a Game and keepind data of goals

function Game(playername, goal){
    let player = {};
    player.name = playername
    player.goals = goal
    
    player.goal = function (goal) {
        this.goals+=goal
    }
    return player;
}

const ronaldo = Game("ronaldo", 5)
const messi = Game("messi", 9)
ronaldo.goal(4)         // ronaldo goal changes to 9
messi.goal(5)           // messi goal changes to 14



// shared methods functional instantiation

const scores = {
    goal(goal){
        this.goals+=goal
    }
}
function Game(playername, goal){
    let player = {};
    player.name = playername
    player.goals = goal;
    player.goal = scores.goal       // here scores is used to get the context of goal()
    
    return player;
}
const  player1 = Game("player1", 9);
player1.goal(4)






// Object.create
// It will allow to create an object 
const Game = {
    name:"game",
    rules:"rules",
    number_of_players:0
}

const cricket = Object.create(Game)
cricket.name="cricket"
cricket.rules="So many rues"
cricket.number_of_players = 11

console.log(`Game Name : ${cricket.name}, Rules : ${cricket.rules}, Number of players : ${cricket.number_of_players}`)

// similary multiple childs can be created using Game Parent


// functional instantiation with shared methods and object.create
const oscores = {
    goal(goal){
        this.goals+=goal
    }
}
function Game(playername, goal){
    let playerscores = Object.create(oscores);      // here playerscores is created from the parent oscores and gets the property of oscores
    playerscores.goals = goal;
    playerscores.goal = oscores.goal       
    
    return playerscores;
}
const  playerX = Game("playerX", 9);
playerX.goal(4)



function _Game(playername, goal){
    let player = Object.create(_Game.prototype);
    player.name = playername
    player.goals = goal
    return player;
}
_Game.prototype.goal = function (goal) {
    this.goals+=goal
}

const _ronaldo = _Game("ronaldo", 5)
const _messi = _Game("messi", 9)
_ronaldo.goal(4)         // ronaldo goal changes to 9
_messi.goal(5)           // messi goal changes to 14
