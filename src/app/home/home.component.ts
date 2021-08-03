import { Component, OnInit } from '@angular/core';
//-- Services
import { DataService } from '../services/data.service';
//-- Interfaces
import { Players } from '../interface/players';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
      //players: Players [] = this.dataService.players;
  }

  players: Players [] = this.dataService.players;

  currHole: number = this.dataService.currHole;
  gameStarted = this.dataService.gameStarted;

}
