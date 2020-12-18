import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  personId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id');
    console.log(this.personId);

    // TODO que con el id podemos lanzar una petición a la API para traer toda la petición
    // de un actor.
  }

}
