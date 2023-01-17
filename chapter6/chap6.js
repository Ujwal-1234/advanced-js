// prototype chaining

function Player(playername, goal){
    this.playername = playername
    this.score = goal
}
Player.prototype._goal = function(goal){
    this.score+=goal
}

const player1 = new Player("dhoni", 5)

Player.prototype.penality = function(){
    console.log("Loosing 1 score")
    this.score-=1
}

player1.penality()  

console.log(player1.score)


// inheritence in the protype chain
function _champion(playername, goal){
    Player.call(this, playername)       // Here the Player method is called with the context of arguments of _champion
    this.score = goal
}

_champion.prototype = Object.create(Player.prototype)   


const player2 = new _champion("ronaldo", 20)