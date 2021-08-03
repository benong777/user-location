import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Players } from "../interface/players";

@Injectable()

export class DataService {
    currHole: number = 1;
    //currHole = new EventEmitter<number>();

    gameStarted = 0;

    players: Players[] = [];
    arrayOfZeros: number[] = [];
}