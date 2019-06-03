import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Result } from '../models/result';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { PostBody } from '../models/post-body';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-output-modal',
  templateUrl: './output-modal.component.html',
  styleUrls: ['./output-modal.component.scss']
})
export class OutputModalComponent implements OnInit {
  @Input() items: Item[];

  data$: Observable<Result>;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}

  ngOnInit() {
    this.data$ = this.callPostAggregatorEndpoint();
  }

  callPostAggregatorEndpoint(): Observable<Result> {
    if (this.items.length === 0) {
      return;
    }
    const postBody = new PostBody();
    postBody.input = this.items;
    return this.http.post<Result>(environment.functionURL, postBody);
  }
}
