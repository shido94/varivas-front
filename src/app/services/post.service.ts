import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpService } from '../@core/http.service';
import { User } from '../shared/interface/user';
import { ConstantService } from '../@core/constant.service';
const Constant =  new ConstantService();

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private httpService: HttpService) {}
  allPost(): Observable<any>  {
    return this.httpService.get('/post');
  }

  myPost(): Observable<any>  {
    return this.httpService.get('/post/my');
  }

  getDetails(id): any {
    return this.httpService.get(`/post/${id}`);
  }


  createPost(value: any): Observable<User> {
    return this.httpService.post('/post', value);
  }

  validateToken(token: string): Observable<any> {
    return this.httpService.post('/user/token/validate', {token});
  }
}
