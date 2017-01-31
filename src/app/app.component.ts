import { Component } from '@angular/core';
import { TechService } from './tech/tech.service';
import { MeService } from './me/me.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the app';

  constructor(private tech:TechService,private me:MeService){
    console.log('APP COMPONENT!!!!!!!!!!!!!!!!!!!!!!');
  }
}
