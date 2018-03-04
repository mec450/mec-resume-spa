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
    let products = [
      {ait:'1'},
      {ait:'0'},
      {ait:'3'},
      {ait:'0'},
      {ait:'5'},
      {ait:'0'},
      {ait:'7'},
      {ait:'0'},
      {ait:'9'},
      {ait:'0'},
      {ait:'11'}
    ];

    console.log('FILTER = ' , products.indexOf({ait:'1'}));

    var unique = products.filter( onlyUnique );

    function onlyUnique(value, index, self) {
      console.log('VALUE = ' , value.ait);
      console.log('products = ' , products[index].ait);
      console.log('self = ' , self);
      console.log('UNIQUE = ' , unique);
      return self.indexOf(value) === index;
    }



    console.log('UNIQUE = ' , unique);
  }
}
