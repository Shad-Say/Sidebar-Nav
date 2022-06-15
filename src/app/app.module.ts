import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { SamplePageOneComponent } from './components/sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './components/sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './components/sample-page-three/sample-page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    SamplePageOneComponent,
    SamplePageTwoComponent,
    SamplePageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
