import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProblemComponent } from './create-problem/create-problem.component';
import { ListProblemComponent } from './list-problem/list-problem.component';
import { EditProblemComponent } from './edit-problem/edit-problem.component';


const routes: Routes = [
 // { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateProblemComponent },
  { path: 'list-problems', component: ListProblemComponent },
  { path: 'update-problem/:id', component: EditProblemComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
