import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'works', component:WorksComponent, children: [
    { path: 'cenzor', component:CenzorComponent },
    { path: 'userlist', component:UserlistComponent },
    { path: 'tasklist', component:TasklistComponent }
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
