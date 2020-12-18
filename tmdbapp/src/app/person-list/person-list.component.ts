import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person-response.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  popularPeopleList: Person[];
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPopular().subscribe(resp => {
      this.popularPeopleList = resp.results;
    });
  }

  getPhotoUrl(person: Person): string {
    return `${this.imageBaseUrl}/${person.profile_path}`;
  }

 

}
