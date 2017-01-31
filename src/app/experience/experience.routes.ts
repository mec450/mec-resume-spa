import {RouterModule} from '@angular/router';
import {ExperienceComponent} from './experience.component';

const routes = [
  { path: 'experience', component: ExperienceComponent }
]

export default RouterModule.forChild(routes);
