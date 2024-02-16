import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthLoginEffects } from './auth-login.effects';

describe('AuthLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthLoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthLoginEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthLoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
