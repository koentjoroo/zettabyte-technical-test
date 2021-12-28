import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Mentor = {
  _id: string 
  email: string
  civility: 'MR' | 'MRS'
  first_name: string
  last_name: string
  company: {
    name: string
    user_type: 'HR' | 'Mentor'
  }
  user_status: 'active' | 'pending'
  count_document: number
}

const TEMPORARY_DATA: Mentor[] = [
  {
    "_id": "15",
    "email": "lionel.darve@yopmail.com",
    "civility": "MR",
    "first_name": "Lionel",
    "last_name": "DARVE",
    "company": {
        "name": "Company",
        "user_type": "Mentor"
    },
    "user_status": "active",
    "count_document": 15
  }
]

@Component({
  selector: 'app-mentor-table',
  templateUrl: './mentor-table.component.html',
  styleUrls: ['./mentor-table.component.scss']
})
export class MentorTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'company_name', 'status']
  mentors = TEMPORARY_DATA 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
