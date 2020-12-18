import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const rutas: Routes = [
  {path: 'people', pathMatch: 'full', component: PersonListComponent},
  {path: 'people/detail/:id', pathMatch: 'full', component: PersonDetailComponent},
  { path: '**', component: PersonListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
