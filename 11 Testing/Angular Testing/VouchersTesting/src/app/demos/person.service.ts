import { Person } from './person';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  constructor(http: Http) { }

  deletePerson(p: Person){

  }

}
