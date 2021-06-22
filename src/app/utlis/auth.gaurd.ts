import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurd implements CanActivate {
  constructor(private userService: UserService, private router: Router){
  }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.currentUservalue;

    if (!currentUser) {
      this.router.navigate(['/auth/login']);
      return true;
    } else {
      return true;
    }

  }

}
