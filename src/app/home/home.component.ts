import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = true;
  items = [];

  constructor(private postService: PostService) {
    this.postService.allPost().subscribe((result) => {
      this.items = result.result;
    });
  }

  ngOnInit(): void {
  }

}
