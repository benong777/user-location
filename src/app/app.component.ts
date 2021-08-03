import { Component } from '@angular/core';
//-- Services
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'user-location';
  //-- Is this needed if not using the dataService?
  constructor( private dataService: DataService) { }
}
