import { Injectable,
         EventEmitter,
         OnInit  } from "@angular/core";
import { Players } from "../interface/players";

@Injectable()

export class DataService implements OnInit {
    ngOnInit() {
    }

    currHole: number = 1;
    gameStarted: number = 0;
    gameEnded: number = 0;

    numOfHoles: number = 9;
    arrayOf9IncrementingNumbers = [1,2,3,4,5,6,7,8,9];
    arrayOf18IncrementingNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    arrayOfZeros: number[] = new Array(18).fill(0);
    players: Players[] = [];

    // //-- For testing 
    // players: Players[] =  [
    //     {
    //     name:  "Ben",
    //     total:  1,
    //     hole: this.arrayOfZeros 
    // },
    // {
    //     name:  "Ben",
    //     total:  1,
    //     hole: this.arrayOfZeros 
    // },
    // {
    //     name:  "Ben",
    //     total:  1,
    //     hole: this.arrayOfZeros 
    // },
    // {
    //     name:  "Justin",
    //     total:  2,
    //     hole: this.arrayOfZeros 
    // } ] ;


    addPlayer(playerName: string) {
        this.arrayOfZeros = new Array(18).fill(0);
        this.players.push({
            name:  playerName,
            total:  0,
            hole: this.arrayOfZeros 
        });
        this.gameEnded = 0;
        console.log(this.players);
    }

    startGame() {
        this.gameStarted = 1;
        this.gameEnded = 0;
    }

    endGame() {
        this.gameStarted = 0;
        this.gameEnded = 1;
    }

    increment(playerIndex: number) {
        this.players[playerIndex].total += 1;
        this.players[playerIndex].hole[this.currHole-1] += 1;
    }

    decrement(playerIndex: number) {
        if ((this.players[playerIndex].total>0 && this.players[playerIndex].hole[this.currHole-1]>0)) {
            this.players[playerIndex].hole[this.currHole-1] -= 1;
            this.players[playerIndex].total -= 1;
          }
    }

    deletePlayer(playerIndex: number) {
        this.players.splice(playerIndex, 1);
    }

    reset() {
        this.players.splice(0, this.players.length);
        this.gameStarted = 0;
        this.gameEnded = 0;
        this.currHole = 1;
    }
}