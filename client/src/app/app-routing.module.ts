import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'pets',
  pathMatch: 'full'
},
{
  path: 'pets',
  component: PetListComponent
},
{
  path: 'pets/add',
  component: PetFormComponent
},
{
 path: 'pets/edit/:id',
 component: PetFormComponent
},
{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
},
{
  path: 'users',
  component: UserListComponent
},
{
  path: 'users/add',
  component: UserFormComponent
},
{
 path: 'users/edit/:id',
 component: UserFormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
