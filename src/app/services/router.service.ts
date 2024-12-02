import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  navigateWithParams(path: string, params: any) {
    this.router.navigate([path], { queryParams: params });
  }
}
