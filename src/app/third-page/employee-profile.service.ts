import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeProfileService {
  base_url = 'http://mybackend.com/api/';
  empProfile_endpoint = 'empDetail';
  constructor(private http: Http) {}

  // Gets all tasks
  getEmployeeProfileDetails() {
    return this.http
      .get(this.base_url + this.empProfile_endpoint);
  } // getTasks

}
