import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrComponent } from './fr/fr.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fr', component: FrComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
