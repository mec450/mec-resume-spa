import { Component, OnInit, Input } from '@angular/core';
import { TechService } from '../tech/tech.service';

@Component({
  selector: 'app-mec-app',
  template: `
{{message}}
    <p>
      <input #myInput type="text" [(ngModel)]="message"><button (click)="onClick($event, myInput)">Click me</button>
    </p>
  `,
  styles: []
})
export class MecAppComponent implements OnInit {

  @Input() message;

  onClick(e, value){
    console.log('e = ' , e);
    console.log('CLICKED = ' , value);
  }

  constructor(private tech:TechService) {
    setTimeout(()=> this.message = Math.random().toString(),1000);
  }

  ngOnInit() {
  }

}
