const team = {
    _players: [
        {
            firstName: 'Yo',
            lastName: 'Primero',
            age: 35
        },{
            firstName: 'Tu',
            lastName: 'Segundo',
            age: 32
        },{
            firstName: 'El',
            lastName: 'Tercero',
            age: 38
        }
    ],
    _games: [
        {
            opponent:'Los pendejos',
            teamPoint: 50,
            opponentPoints: 10
        },{
            opponent:'Los de la Esquina',
            teamPoint: 40,
            opponentPoints: 20
        },{
            opponent:'Los del centro',
            teamPoint: 31,
            opponentPoints: 30
        }
    ],
    get player(){
        return this._players
    },
    get game(){
        return this._games
    },
    addPlayer(fName,lName, old){
        const newbie = {
            firstName: fName,
            lastName:lName,
            age:old
        }
        this._players.push(newbie);
    },
    addGame(opponentName,teamScore,opponentScore){
        const news = {
            opponent:opponentName,
            teamPoint:teamScore,
            opponentPoints:opponentScore
        }
        this._games.push(news);

    }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team.player);

team.addGame('Minnesota',30,35);
team.addGame('Colorado',20,20);
team.addGame('Nevada',40,20);

console.log(team.game);