import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthLogoutActions} from "../../actions/auth-logout-action/auth-logout.actions";
import {StoreService} from "../../services/store-service/store.service";
import {tap} from "rxjs";

@Injectable()
export class AuthLogoutEffects {
  constructor(private actions$: Actions, private storeService: StoreService) {}

  logoutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthLogoutActions.authLogout),
    tap(() => {
      this.storeService.authenticationStatus$.next(false);
      sessionStorage.removeItem('currentUser');
    })
  ), {dispatch: false});
}
