import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input () title: string;
  @Input () content: string;
  @Input () loveIts: number;
  date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }

  increase() {
      this.loveIts ++;
    }

  decrease() {
   this.loveIts --;
  }
}
