import { Injectable }    from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post } from './types/post';
import { AdDay} from './types/ad-day';

import { formatAdDays } from "./service.util";


@Injectable()
export class Service {

  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';
  private adDaysUrl = "http://kargotest.herokuapp.com/api/trackers?";

  formatAdDaysUrl (from: string, to: string): string {
    return [this.adDaysUrl, "from=", from, "&to=", to].join("");
  }

  constructor (private http: Http) {}

  private extractAdDays(res: Response) {
    return formatAdDays(res.json().data) || { };
  }

  private extractPosts(res: Response) {
    return res.json() || { };
  }

  private extractPost(res: Response) {
    return res.json() || { };
  }

  getAdDays (from: string, to: string): Observable<AdDay[]> {
    return this.http
      .get(this.formatAdDaysUrl(from, to))
      .map(this.extractAdDays)
      .catch(this.handleError)
  }

  getPosts (): Observable<Post[]> {
    return this.http
      .get(this.postsUrl)
      .map(this.extractPosts)
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get(this.postsUrl + "/" + id)
      .map(this.extractPost)
      .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    
    return Observable.throw(errMsg);

  }
}
