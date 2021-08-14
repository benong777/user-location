import { Component, OnInit } from '@angular/core';
//-- Services
import { DataService } from '../services/data.service';
//-- Interface
import { Players } from '../interface/players';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  numOfHoles = 9;
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

    this.players = this.dataService.players;
  }

  onAddPlayer() {
      this.arrayOfZeros = new Array(18).fill(0);
      this.dataService.addPlayer(this.newPlayerName);
      this.gameEnded = this.dataService.gameEnded; 
      this.newPlayerName = '';
      console.log("GameEnded: " + this.gameEnded);
  }

  onStartGame() {
      this.dataService.startGame();
      this.gameStarted = this.dataService.gameStarted;
      this.currHole = this.dataService.currHole;
      this.gameEnded = this.dataService.gameEnded;
  }

  onEndGame() {
    this.dataService.endGame();
    this.gameStarted = this.dataService.gameStarted;
    this.gameEnded = this.dataService.gameEnded;
    this.currHole = this.dataService.currHole;
  }

  onReset() {
    if (confirm('All data will be deleted. Are you sure you want to continue?')) {
      this.dataService.reset();
      this.gameEnded = this.dataService.gameEnded;
      this.gameStarted = this.dataService.gameStarted;
      this.currHole = this.dataService.currHole;
    }
  }

  onIncrement(i: number) {
    this.dataService.increment(i);
    console.log(this.players[i]);
  }

  onDecrement(i: number) {
    this.dataService.decrement(i);
    this.players = this.dataService.players;
  }

  onDeletePlayer(i: number) {
    this.dataService.deletePlayer(i);
    this.players = this.dataService.players;
  }

  onNextHole() {
    if (this.dataService.currHole >= 1 && this.dataService.currHole < this.dataService.numOfHoles) {
      this.currHole += 1;
      this.dataService.currHole = this.currHole;
    }
  }

  onPrevHole() {
    if (this.dataService.currHole > 1 && this.dataService.currHole <=18) {
      this.currHole -= 1;
      this.dataService.currHole = this.currHole;
    }
  }

  onSelect9Holes() {
    this.dataService.numOfHoles = 9;
    console.log("9-Hole selected");
  }

  onSelect18Holes() {
    this.dataService.numOfHoles = 18;
    console.log("18-Hole selected");
  }

  onSelectCourse() {
    
  }

}
