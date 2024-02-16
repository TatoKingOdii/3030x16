import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthLogoutEffects } from './auth-logout.effects';

describe('AuthLogoutEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthLogoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthLogoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthLogoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
