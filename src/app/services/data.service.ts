import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private base_url: string = 'https://localhost:3000';
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.base_url,
    });
  }

  get({
    route,
    param,
    headers = HttpHeaders,
  }: {
    route: string;
    param?: string;
    headers?: any;
  }) {
    return this.axiosInstance.get(route, {
      headers: headers,
      params: param,
    });
  }

  post({
    route,
    body,
    headers = HttpHeaders,
  }: {
    route: string;
    body: any;
    headers?: any;
  }) {
    return this.axiosInstance.post(route, body, {
      headers: headers,
    });
  }

  patch({
    route,
    body,
    headers = HttpHeaders,
  }: {
    route: string;
    body: any;
    headers?: any;
  }) {
    return this.axiosInstance.patch(route, body, {
      headers: headers,
    });
  }

  delete({
    route,
    param,
    headers = HttpHeaders,
  }: {
    route: string;
    param: string;
    headers?: any;
  }) {
    return this.axiosInstance.delete(route, {
      headers: headers,
      params: param,
    });
  }
}
