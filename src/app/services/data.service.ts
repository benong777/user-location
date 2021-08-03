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

    players: Players[] = [];
    arrayOfZeros: number[] = [];

    addPlayer(playerName: string) {
        this.arrayOfZeros = new Array(18).fill(0);
        // console.log(this.arrayOfZeros);
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
        this.players[playerIndex].hole[this.currHole] += 1;
    }
}