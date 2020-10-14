import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: 'details', component:DetailsComponent },
  { path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
