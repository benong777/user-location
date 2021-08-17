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
    this.numOfHoles = this.dataService.numOfHoles;
    this.arrayOf9IncrementingNumbers = this.dataService.arrayOf9IncrementingNumbers;
    this.arrayOf18IncrementingNumbers = this.dataService.arrayOf18IncrementingNumbers;
  }

  players: Players [] = this.dataService.players;
  selectedCourseIndex: number = 0; 
  distances: number [] = this.dataService.distances;

  currHole: number = this.dataService.currHole;
  gameStarted = this.dataService.gameStarted;

  numOfHoles: number = 0;
  arrayOf9IncrementingNumbers: number [] = this.dataService.arrayOf9IncrementingNumbers;
  arrayOf18IncrementingNumbers: number[] = this.dataService.arrayOf18IncrementingNumbers;
}
