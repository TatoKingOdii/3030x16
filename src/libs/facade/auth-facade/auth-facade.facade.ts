import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {StoreService} from "../../services/store-service/store.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthLogoutActions} from "../../actions/auth-logout-action/auth-logout.actions";
import {AuthLoginActions} from "../../actions/auth-login-action/auth-login.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(private storeService: StoreService,
              private store: Store) {
    this.storeService.authenticationStatus$.next(sessionStorage.getItem('currentUser') != null);
  }

  getAuthStatus(): Observable<boolean> {
    return this.storeService.authenticationStatus$.asObservable();
  }

  authenticate(user: User, path: string, errHandler: (msg: string) => void) {
    this.store.dispatch(AuthLoginActions.authLogin({user, path, errHandler}));
  }

  deauthenticate() {
    this.store.dispatch(AuthLogoutActions.authLogout());
  }
}
