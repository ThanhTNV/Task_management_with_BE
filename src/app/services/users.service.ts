import { inject, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly dataService = inject(DataService);

  async login(body: { email: string; password: string }) {
    const response = await this.dataService.post({
      route: 'users/login',
      body,
    });

    if (response.status === 200) {
      this.saveTokens(response.data.result);
    } else {
      console.log('Failed to log in!');
      return response.data.message;
    }
  }

  async register(body: { email: string; password: string }) {
    const response = await this.dataService.post({
      route: 'users/register',
      body,
    });

    if (response.status === 200) {
      this.saveTokens(response.data.result);
    }
  }

  get access_token() {
    return localStorage.getItem('access_token') || '';
  }

  set access_token(token: string) {
    localStorage.setItem('access_token', token);
  }

  get refresh_token() {
    return localStorage.getItem('refresh_token') || '';
  }

  set refresh_token(token: string) {
    localStorage.setItem('refresh_token', token);
  }

  saveTokens(tokens: { access_token: string; refresh_token: string }) {
    this.access_token = tokens.access_token;
    this.refresh_token = tokens.refresh_token;
  }

  refreshToken() {
    return this.dataService.post({
      route: 'users/refresh',
      body: {
        refresh_token: this.refresh_token,
      },
    });
  }

  clearTokens() {
    this.access_token = '';
    this.refresh_token = '';
  }

  async logout() {
    await this.dataService.post({
      route: 'users/logout',
      body: {
        refresh_token: this.refresh_token,
      },
    });
    return;
  }

  get isLoggedIn() {
    return !!this.access_token;
  }
}
