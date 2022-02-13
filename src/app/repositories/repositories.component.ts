import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any;
  constructor(public searchService: SearchRequestService) { }

  searchRepo(repository:string){
    this.searchService.getUserRepo(repository).then((success)=>{
      this.repos = this.searchService.repos;
     },
     (error)=>{
       console.log(error)
     });
  }
  ngOnInit(): void {
    this.searchRepo("Burgerpalace");
  }

}
