const Warrior = require('../character/warrior');


class Lobby {
    static lobbies = [];

    constructor(...players) {
        this.players = players || [];
        this.newLobby(this)
    }


    newLobby(lobby) {
        Lobby.lobbies.push(lobby);
    }

    addPlayers(...newPlayers) {
        this.players.push(...newPlayers)
    }

    leaveLobby(player) {
        let playerIdx = this.players.indexOf(player);
        this.players.splice(playerIdx, 1);
    }

    averageLobbyLevel() {
        let sum = 0;
        for (let i = 0; i < this.players.length; i++) {
            sum += this.players[i].level
        }

        return sum / this.players.length;
    }

    getPlayers() {
        return this.players
    }

}




let ryan = new Warrior('Ryan');
let anthony = new Warrior('anthony')
let test = new Warrior('test')

let teamDeathMatch = new Lobby(ryan, anthony);
console.log(Lobby)
// let playersInLobby1 = teamDeathMatch.getPlayers();


// function startGame() {
//     let players = teamDeathMatch.getPlayers.apply()
//     setTimeout(() => {

//         // let playersList = players();
//         console.log(players())
//     }, 2000)
// }

// startGame()




// let lobbyLev = teamDeathMatch.averageLobbyLevel()
// teamDeathMatch.addPlayers(test)
// teamDeathMatch.leaveLobby(test)
// console.log(teamDeathMatch.averageLobbyLevel())
// lobbyLev()
// averageLobbyLevel(ryan, anthony)
