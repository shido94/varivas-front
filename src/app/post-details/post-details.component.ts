import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../@core/notification.service';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  item: any;
  isFollows = false;
  user;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private notificationService: NotificationService,
    private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['id'];
    });

    this.postService.getDetails(this.postId).subscribe((result: any) => {
      this.item = result.result.post;
      this.isFollows = result.result.follows ? true : false;
    });

    this.userService.getProfile().subscribe(user => {
      this.user = user;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  followUser(followId) {
    this.userService.followUser(followId).subscribe((result: any) => {
      this.isFollows = result.result.userId ? true : false;
    });
  }
}
