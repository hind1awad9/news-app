import { Component, OnInit, Input } from '@angular/core';
import Post from "../../components/home-page/Post.model"
import { HomeService } from 'src/app/components/home-page/service/post.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() styles: any
  @Input() post: Post
  constructor() {
  }

  ngOnInit() {
    // console.log('card logging',this.post)

  }
  getData() {
    HomeService.post = this.post;
  }

}
