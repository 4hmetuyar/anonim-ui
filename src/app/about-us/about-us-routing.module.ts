import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { WeAreProvideComponent } from './we-are-provide/we-are-provide.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { shortCode: 'about-us' },
  },
  {
    path: 'about-us/we-are-provide',
    component: WeAreProvideComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsModule { }
