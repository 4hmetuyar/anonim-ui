import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ReferancesComponent } from './referances/referances.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnterPriseApplicationComponent } from './our-services/enter-prise-application/enter-prise-application.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'referances',
    component: ReferancesComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
    children: [
      {
        path: 'enter-price-application',
        component: EnterPriseApplicationComponent,
      },
    ],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
