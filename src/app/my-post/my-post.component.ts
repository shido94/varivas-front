import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {
  items = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.myPost().subscribe((result: any) => {
      this.items = result.result;
    });
  }

}
