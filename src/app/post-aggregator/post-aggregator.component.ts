import { Component } from '@angular/core';
import { Item } from '../models/item';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { OutputModalComponent } from '../output-modal/output-modal.component';

@Component({
  selector: 'app-post-aggregator',
  templateUrl: './post-aggregator.component.html',
  styleUrls: ['./post-aggregator.component.scss']
})
export class PostAggregatorComponent {
  sourceURL: string;
  items: Item[] = [];

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  onSubmit() {
    this.addItem();
  }

  addItem() {
    const item: Item = new Item();
    item.id = this.items.length + 1;
    item.sourceURL = this.sourceURL;
    this.items.push(item);
    this.sourceURL = '';
  }

  deleteItem(deleteItem: Item) {
    for (let i = 0; i < this.items.length; i++ ) {
      if (deleteItem.id === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  }

  async outputPosts() {
    const modalRef = this.modalService.open(OutputModalComponent);
    modalRef.componentInstance.items = this.items;
  }
}
