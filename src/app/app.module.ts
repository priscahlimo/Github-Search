import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DateCountPipe } from './date-count.pipe';
import { RepositoriesComponent } from './repositories/repositories.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repositories', component: RepositoriesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchInputComponent,
    DateCountPipe,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
