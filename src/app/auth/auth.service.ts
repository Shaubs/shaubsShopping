import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  constructor() { }
  // ...
  public isAuthenticated(): boolean {
    const auth = sessionStorage.getItem('auth');
    if (auth === 'true') { return true }
    else { return false }

  }
}