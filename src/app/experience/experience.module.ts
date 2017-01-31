import {NgModule} from "@angular/core";
import {ExperienceComponent} from "./experience.component";
import {TabsModule} from "../common/tabs.module";
import {DetailsModule} from "./details.module";
import experienceRoutes from './experience.routes';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [TabsModule,DetailsModule,experienceRoutes],
  providers: [],
  exports: [ExperienceComponent]
})
export class ExperienceModule { }
