import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetService} from './services/pets.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService} from './services/users.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PetFormComponent,
    PetListComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PetService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
