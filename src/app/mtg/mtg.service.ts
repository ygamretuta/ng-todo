import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Mtg} from './mtg';



@Injectable()
export class MtgService {

  constructor(private http: Http) {

  }
}
