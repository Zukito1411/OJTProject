import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private defaultUsername: string = 'admin';
  private defaultPassword: string = 'password';

  constructor() { }

  public login(username: string, password: string): boolean {
    if (username === this.defaultUsername && password === this.defaultPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  public logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
