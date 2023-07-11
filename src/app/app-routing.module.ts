import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { DetailsComponent } from './details/details.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { HomeComponent } from './home/home.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

const routes: Routes = [
  { path:'', redirectTo:'Home', pathMatch:'full'},
  { path:"Home", component:HomeComponent },
  { path:"Application", component:ApplicationComponent },
  { path:"ViewApplication", component:ViewApplicationComponent },
  { path:"Details/:id", component:DetailsComponent },
  { path:"Edit/:id", component:EditApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
