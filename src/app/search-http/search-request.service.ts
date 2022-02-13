import { Injectable } from '@angular/core';
import { Username } from '../username';
import { Repo } from '../repo';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  user!:Username;
  repos!:Repo;
  constructor(private http:HttpClient) { 
    this.user = new Username("",0,0,0,"","","");
    this.repos = new Repo("","","","",new Date());
  }
}
