import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../@core/notification.service';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private notificationService: NotificationService,
    private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  addPost(): void {
    this.postService.createPost(this.form.value).subscribe((result: any): void => {
      this.router.navigate(['/user/post']);
    }, (error) => {
      const message = error.error.message || 'Something went wrong';
      this.notificationService.error('Login', message);
    });
  }
}
