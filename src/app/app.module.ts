import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReferancesComponent } from './referances/referances.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { FooterComponent } from './footer/footer.component';
import { WeAreProvideComponent } from './about-us/we-are-provide/we-are-provide.component';
import { WindowsFormApplicationComponent } from './our-services/windows-form-application/windows-form-application.component';
import { EnterPriseApplicationComponent } from './our-services/enter-prise-application/enter-prise-application.component';
import { PersonalApplicationComponent } from './our-services/personal-application/personal-application.component';
import { MobileApplicationComponent } from './our-services/mobile-application/mobile-application.component';
import { SeoServicesComponent } from './our-services/seo-services/seo-services.component';
import { SystemSecurityComponent } from './our-services/system-security/system-security.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ReferancesComponent,
    OurServicesComponent,
    ContactUsComponent,
    NavContainerComponent,
    FooterComponent,
    WeAreProvideComponent,
    WindowsFormApplicationComponent,
    EnterPriseApplicationComponent,
    PersonalApplicationComponent,
    MobileApplicationComponent,
    SeoServicesComponent,
    SystemSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
