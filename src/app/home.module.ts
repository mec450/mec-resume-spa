import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from './home.component';
import {SelectedComponent} from './selected.component';
import {MeModule} from './me/me.module';
import {TechModule} from './tech/tech.module';
import {ExperienceModule} from './experience/experience.module';
import {PlansModule} from './plans/plans.module';
import {SampleModule} from './samples/sample.module';
import {TestModule} from './test/test.module';
import homeRoutes from './home.routes';



@NgModule({
  declarations: [
    HomeComponent,
    SelectedComponent
  ],
  imports: [CommonModule,MeModule,TechModule,ExperienceModule,PlansModule,SampleModule,TestModule,homeRoutes],
  providers: [],
  exports: [HomeComponent,SelectedComponent]
})
export class HomeModule { }
