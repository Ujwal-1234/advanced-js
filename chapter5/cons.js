// constructor use and prototyping
class Player{
    constructor(playername, goal){
        this.playername = playername
        this.goal = goal
    }
    _goal(goal){
        this.goal+=goal
    }
}

const messi = new Player("messi", 0)


// static methods
class Player{
    constructor(playername, goal){
        this.playername =  playername
        this.goal = goal
    }
    _goal(goal){
        this.goal+=goal
    }
}
function needgoalfrom(players) {                            // The function returns the player name with least goal
    const _leastgoal = players.sort((a, b) => {             // Sorting the array of goals of players
        console.log(a)
        console.log(b)
        return a.goal - b.goal;
    });
    return _leastgoal[0].playername;
}
const messi_ = new Player("Messi", 8);
const ronaldo_ = new Player("Ronaldo", 9);

messi_.hasOwnProperty("playername")     // true
messi_.hasOwnProperty("goal")           // true
messi_.hasOwnProperty("_goal")          // false
// in above messi_ have only 2 own property name, goal


messi_ instanceof Player        // true
messi_ instanceof needgoalfrom  // false

needgoalfrom([messi_, ronaldo_])




const proto = Object.getPrototypeOf(messi_);
console.log(proto === Player.prototype)         // loggs true


// verifying the key and values present in messi_
for (let key in messi_){
    console.log(`key ${key}, value : ${messi_[key]}`)
}