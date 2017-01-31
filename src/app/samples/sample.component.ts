import { Component, Output, EventEmitter } from '@angular/core';
import {SampleService} from './sample.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'sample',
  templateUrl: 'sample.component.html',
  styleUrls: ['sample.component.css'],
  /*host: {
    '[class.enlarge]' : 'enlargeImg'
  }*/
})

export class SampleComponent {
  @Output() displaySample = new EventEmitter();
  private sub;
  private selectedTab;
  private selectedImg;
  private enlargeImg = 'small';

  constructor(private sample:SampleService,private router:Router,private route:ActivatedRoute){
    let testRet = sample.getTabData();
    testRet.subscribe(x => {
      sample.categories = x[0]['tabs'];
      this.selectedImg = this.sample.categories[this.selectedTab].content;
    }, e => console.error('OBSERVE ERROR = ' , e));
    this.sub = this.route.params.subscribe(params => {
      let id = this.route.params['_value'].id;
      if(id) {
        id = id.charAt(2);
        this.selectedTab = id;
      } else {
        this.selectedTab = '0';
      }
      if(this.sample.categories){
        this.selectedImg = this.sample.categories[this.selectedTab].content;
      }
    });
    console.log('adding a log to sample component constructor.');
    console.log('adding another log to sample component constructor.');
  }

  private ngOnInit() {
    /*this.sub = this.route.params.subscribe(params => {
      let id = this.route.params['_value'].id;
      if(id) {
        id = id.charAt(2);
        this.selectedTab = id;
      } else {
        this.selectedTab = '0';
      }
      if(this.sample.categories){
        this.selectedImg = this.sample.categories[this.selectedTab].content;
      }
    });*/
  }

  private updateView(id) {
    this.selectedTab = id;
    this.selectedImg = this.sample.categories[this.selectedTab].content;
  }

  private ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  onExpandImage(event) {
    if(event.viewType == 'enlarge'){
      this.enlargeImg = 'enlarge';
      window.scrollTo(0, 0);
    } else {
      this.enlargeImg = 'small';
      window.setTimeout(() => {
        let sample = document.querySelector('.sample-inner'),
            bounds = sample.getBoundingClientRect();
        let scrollPos = (window.innerWidth > 680) ? document.body.scrollHeight : bounds.top;
        window.scrollTo(0,scrollPos);
      }, 500);
    }
    this.displaySample.emit({
      viewType: this.enlargeImg
    })
  }

}
