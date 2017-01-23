import { Component, OnInit } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MtgService } from './mtg.service';
import { Mtg } from './mtg';


@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.component.html',
  styleUrls: ['./mtg.component.css'],
})
export class MtgComponent implements OnInit {
  cards = [];

  private remoteUrl = 'https://api.magicthegathering.io/v1/cards?supertypes=legendary&types=creature&colors=red,white&pagesize=20';

  constructor(private http: Http) { }

  ngOnInit() {
    return this.http.get(this.remoteUrl)
      .map(response => response = response.json())
      .subscribe((results) => {
        console.log(results);
        this.cards = results.cards;
      }, this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error() || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
