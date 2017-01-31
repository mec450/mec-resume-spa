import { Component } from '@angular/core';
import { ExperienceService } from '../experience/experience.service';
@Component({
  selector: 'experience',
  templateUrl: '../experience/experience.component.html',
  styleUrls: ['../experience/experience.component.css']
})
export class ExperienceComponent {
  constructor(private exp:ExperienceService){
  }
}
