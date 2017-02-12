import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { Post } from '../../Types/post';
import { AdDay } from '../../Types/ad-day'
import { Service } from '../../service'; 
import { isValid } from './main.util';


@Component({
  templateUrl: "./views/main.html",
  styleUrls: [ "./styles/main.css" ]
})
export class PostDetail {
  post: Post;
  adDays: AdDay[] = [];
  fromField: string = "";
  toField: string = "";
  errorMessage: string;


  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private location: Location
  ){}


  tryRequest(): void {
    const fromIsValid: boolean = isValid(this.fromField);
    const toIsValid: boolean = isValid(this.toField);

    if (fromIsValid && toIsValid) {
      this.service.getAdDays(this.fromField, this.toField)
        .subscribe(
          adDays => this.adDays = adDays,
          error =>  this.errorMessage = <any>error
        )
    }
  }


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.service.getPost(+params['id']))
      .subscribe(post => this.post = post);
  }

}