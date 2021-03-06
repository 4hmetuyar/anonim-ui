import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeAreProvideComponent } from './we-are-provide/we-are-provide.component';
import { AboutUsComponent } from './about-us.component';
import { MissionAndVisionComponent } from './mission-and-vision/mission-and-vision.component';
import { ValuesComponent } from './values/values.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutHistoryComponent } from './about-history/about-history.component';



@NgModule({
  declarations: [AboutUsComponent, WeAreProvideComponent, MissionAndVisionComponent, ValuesComponent, ProfileComponent, AboutHistoryComponent],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
