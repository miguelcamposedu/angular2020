import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.class';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentsList: Student[];
  dataSource = new MatTableDataSource<Student>();
  displayedColumns: string[] = ['first-name', 'last-name', 'age', 'course', 'created'];

  constructor(private studensService: StudentsService) { }

  ngOnInit(): void {
    this.studensService.getStudents().subscribe(resp => {
      this.studentsList = resp.map(elem =>  {
        return {
          id: elem.payload.doc.id,
          data: elem.payload.doc.data() 
        } as Student;
      });
      this.dataSource.data = this.studentsList;
    });
  }

}
