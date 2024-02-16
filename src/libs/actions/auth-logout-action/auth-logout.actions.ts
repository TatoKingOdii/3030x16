import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthLogoutActions = createActionGroup({
  source: 'AuthLogout',
  events: {
    'Auth Logout': emptyProps(),
    'Auth Logout Success': emptyProps(),
    'Auth Logout Failure': props<{ error: string }>(),
  }
});
