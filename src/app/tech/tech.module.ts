import {NgModule} from "@angular/core";
import {TechComponent} from "./tech.component";
import {TabsModule} from "../common/tabs.module";
import {DetailsModule} from "./details.module";
import techRoutes from './tech.routes';

@NgModule({
  declarations: [TechComponent],
  imports: [TabsModule,DetailsModule,techRoutes],
  providers: [],
  exports: [TechComponent]
})
export class TechModule { }
