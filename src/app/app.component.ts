import { Component } from '@angular/core';
import { Constants } from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  primaryColor:string = Constants.primaryColor;
}
