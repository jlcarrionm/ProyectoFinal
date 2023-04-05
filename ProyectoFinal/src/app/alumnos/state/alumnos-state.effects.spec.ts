import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlumnosStateEffects } from './alumnos-state.effects';

describe('AlumnosStateEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnosStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlumnosStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AlumnosStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
