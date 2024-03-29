import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';

export interface AuthState {
  user: User | null;
  isLoggedin: boolean | null;
}

export const authStateKey = '[ auth ] key';

export const AUTH_INTIAL_STATE: AuthState = {
  user: null,
  isLoggedin: null,
};

export const authReducer = createReducer(AUTH_INTIAL_STATE);
