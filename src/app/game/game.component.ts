import { Component, OnInit } from '@angular/core';
import { Players } from '../interface/players';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameStarted: number = 0;
  playerName: string = '';
  newPlayerName: string = '';
  players: Players[] = [];
  // players = [
  //   { 
  //     name: '',
  //     total: 0,
  //     h1: 0, h2: 0, h3: 0
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddPlayer() {
      this.players.push({
          name:  this.newPlayerName,
          total:  0,
          h1: 0, h2: 0, h3: 0
      });
  }

  onStartGame() {
      this.gameStarted = 1;
      console.log("Players length: " + this.players.length);
  }

  onEndGame() {
    this.gameStarted = 0;
  }

  onReset() {
    console.log("RESET Length: " + this.players.length);
    this.players = [];
    console.log("RESET Length: " + this.players.length);
  }

}
