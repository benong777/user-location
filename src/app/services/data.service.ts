import { Injectable,
         EventEmitter,
         OnInit  } from "@angular/core";
import { Players } from "../interface/players";

@Injectable()

export class DataService implements OnInit {
    //-- Course data (fixed!)
    courses = [
        { 
            name: 'Golf Course',
            distance9Hole: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            par9Hole: [ 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
            distance18Hole: [ 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            par18Hole: [ 3, 3, 3, 3, 3, 3, 3, 3, 3,
                   3, 3, 3, 3, 3, 3, 3, 3, 3 ],
            
        },
        { 
          name: 'Pruneridge',
          distance9Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109 ],
          par9Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9 ],
          distance18Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109,
                      110, 100, 100, 100, 100, 100, 100, 100, 118 ],
          par18Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9,
                 0, 3, 3, 3, 3, 3, 3, 3, 8 ],
        },
        { 
            name: 'Mission Hills',
            distance9Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109 ],
            par9Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9 ],
            distance18Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109,
                        110, 100, 100, 100, 100, 100, 100, 100, 118 ],
            par18Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9,
                    0, 3, 3, 3, 3, 3, 3, 3, 8 ],
            
        },
        { 
            name: 'Monarch Bay',
            distance9Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109 ],
            par9Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9 ],
            distance18Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109,
                        110, 100, 100, 100, 100, 100, 100, 100, 118 ],
            par18Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9,
                    0, 3, 3, 3, 3, 3, 3, 3, 8 ],
            
        },
        { 
            name: 'Corica Park',
            distance9Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109 ],
            par9Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9 ],
            distance18Hole: [ 101, 100, 100, 100, 100, 100, 100, 100, 109,
                        110, 100, 100, 100, 100, 100, 100, 100, 118 ],
            par18Hole: [ 1, 3, 3, 3, 3, 3, 3, 3, 9,
                    0, 3, 3, 3, 3, 3, 3, 3, 8 ],
        }
    ];

    ngOnInit() {
    }

    selectedCourse: string = 'Golf Course';
    selectedCourseIndex: number = 0;

    currHole: number = 1;
    gameStarted: number = 0;
    gameEnded: number = 0;

    numOfHoles: number = 9;
    arrayOf9IncrementingNumbers = [1,2,3,4,5,6,7,8,9];
    arrayOf18IncrementingNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    arrayOfZeros: number[] = new Array(18).fill(0);
    players: Players[] = [];

    distances: number[] = this.courses[0].distance9Hole;


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

    selectNumOfHoles(selectedNumOfHoles: number) {
        this.numOfHoles = selectedNumOfHoles;
        this.selectCourse(this.selectedCourse);
    }

    selectCourse(selectedCourse: string) {
        this.selectedCourse = selectedCourse;
        if (selectedCourse==='Golf Course') {
            if (this.numOfHoles===9) {
                this.distances = this.courses[0].distance9Hole;
            } else {
                this.distances = this.courses[0].distance18Hole;
            }
        }
        if (selectedCourse==='Pruneridge') {
            //this.distances = this.courses[1].distance9Hole;
            console.log("Pruneridge Selected");

            if (this.numOfHoles===9) {
                this.distances = this.courses[1].distance9Hole;
            } else {
                this.distances = this.courses[1].distance18Hole;
            }
        }
    }
}
