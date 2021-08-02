import { Component, OnInit } from '@angular/core';
import { Players } from '../interface/players';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currHole = 1;
  gameStarted: number = 0;
  gameEnded: number = 0;
  newPlayerName: string = '';
  players: Players[] = [];
  arrayOfZeros: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddPlayer() {
      this.arrayOfZeros = new Array(18).fill(0);
      this.players.push({
          name:  this.newPlayerName,
          total:  0,
          hole: this.arrayOfZeros 
      });
      // console.log(this.arrayOfZeros);
      this.newPlayerName = '';
  }

  onStartGame() {
      this.gameStarted = 1;
      this.currHole = this.currHole;
      this.gameEnded = 0;
      //console.log("Players length: " + this.players.length);
  }

  onEndGame() {
    this.gameStarted = 0;
    this.gameEnded = 1;
  }

  onReset() {
    this.players = [];
    this.gameStarted = 0;
    this.gameEnded = 0;
    this.currHole = 1;
  }

  onIncrement(i: number) {
    this.players[i].hole[this.currHole] += 1;
    this.players[i].total += 1;
    console.log(this.players[i]);
  }

  onDecrement(i: number) {
    if ((this.players[i].total>0 && this.players[i].hole[this.currHole]>0)) {
      this.players[i].hole[this.currHole] -= 1;
      this.players[i].total -= 1;
    }
  }

  onNextHole() {
    if (this.currHole >= 1 && this.currHole <17) {
      this.currHole += 1;
    }
  }

}
