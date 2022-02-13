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
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchInputComponent,
    DateCountPipe,
    RepositoriesComponent,
    NavbarComponent
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
