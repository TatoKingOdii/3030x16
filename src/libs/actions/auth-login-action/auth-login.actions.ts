import { createActionGroup, props } from '@ngrx/store';
import {User} from "../../model/user";

export const AuthLoginActions = createActionGroup({
  source: 'AuthLogin',
  events: {
    'Auth Login': props<{ user: User, path: string, errHandler: (msg: string) => void}>(),
    'Auth Login Success': props<{ user: User, path: string, users: User[] }>(),
    'Auth Login Failure': props<{ error: string, errHandler: (msg: string) => void }>(),
  }
});
