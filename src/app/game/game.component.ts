import { Component, OnInit } from '@angular/core';
//-- Services
import { DataService } from '../services/data.service';
//-- Interface
import { Players } from '../interface/players';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currHole: number = 1;
  gameStarted: number = 0;
  gameEnded: number = 0;
  newPlayerName: string = '';
  players: Players[] = [];
  arrayOfZeros: number[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.currHole = this.dataService.currHole;
    this.gameStarted = this.dataService.gameStarted;
    //this.gameEnded = this.dataService.gameEnded;
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
      this.dataService.gameStarted = 1;
      this.gameStarted = this.dataService.gameStarted;
      // this.currHole = this.currHole;
      this.currHole = this.dataService.currHole;
      this.gameEnded = 0;
      //console.log("Players length: " + this.players.length);
  }

  onEndGame() {
    this.dataService.gameStarted = 0
    this.gameStarted = this.dataService.gameStarted;
    this.gameEnded = 1;
    this.currHole = this.dataService.currHole;
  }

  onReset() {
    this.players = [];
    this.gameStarted = 0;
    this.gameEnded = 0;
    this.currHole = 1;
    this.dataService.currHole = 1;
  }

  onIncrement(i: number) {
    // this.players[i].hole[this.currHole] += 1;
    this.players[i].hole[this.dataService.currHole] += 1;
    this.players[i].total += 1;
    //console.log(this.players[i]);
  }

  onDecrement(i: number) {
    if ((this.players[i].total>0 && this.players[i].hole[this.dataService.currHole]>0)) {
      this.players[i].hole[this.dataService.currHole] -= 1;
      this.players[i].total -= 1;
    }
  }

  onNextHole() {
    if (this.dataService.currHole >= 1 && this.dataService.currHole <17) {
      this.currHole += 1;
      this.dataService.currHole = this.currHole;
    }
  }

  onPrevHole() {
    if (this.dataService.currHole >= 1 && this.dataService.currHole <17) {
      this.currHole -= 1;
      this.dataService.currHole = this.currHole;
    }
  }

}
