import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './components/test-page/test-page.component';
import { SamplePageOneComponent } from './components/sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './components/sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './components/sample-page-three/sample-page-three.component';

const routes: Routes = [
  { path: '', component: TestPageComponent, children: [
    { path: 'page-1', component: SamplePageOneComponent },
    { path: 'page-2', component: SamplePageTwoComponent },
    { path: 'page-3', component: SamplePageThreeComponent },
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
