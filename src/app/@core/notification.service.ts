import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private toastr: ToastrService) {
  }

  // tslint:disable-next-line:typedef
  success(title: string, message: string, callback = () => { }, timeOut = 30000) {
    this.toastr.success(message, title, { timeOut });
  }

  // tslint:disable-next-line:typedef
  error(title: string, message: string, callback = () => { }, timeOut = 30000) {
    this.toastr.error(message, title, { timeOut });
  }
}
