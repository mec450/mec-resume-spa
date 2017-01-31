import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SampleComponent} from "./sample.component";
import {TabsModule} from "../common/tabs.module";
import {DetailsModule} from "./details.module";
import sampleRoutes from './sample.routes';

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule,TabsModule,DetailsModule,sampleRoutes],
  providers: [],
  exports: [SampleComponent]
})
export class SampleModule { }
