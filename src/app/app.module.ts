import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { HomeModule } from './home.module';
import { AppComponent } from './app.component';
import { MeService } from './me/me.service';
import { TechService } from './tech/tech.service';
import { ExperienceService } from './experience/experience.service';
import { PlansService } from './plans/plans.service';
import { SampleService } from './samples/sample.service';
import { TestService } from './test/test.service';
import { FooterService } from './footer/footer.service';
import { ModalService } from './modal/modal.service';
import appRoutes from './app.routes.ts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HomeModule,
    appRoutes
  ],
  providers: [TestService,PlansService,MeService,TechService,ExperienceService,SampleService,FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
