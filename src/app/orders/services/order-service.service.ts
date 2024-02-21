import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  http$ = inject(HttpClient);

  constructor() {}
  public getOrders(req: any) {
    let path = `https://apis.fretron.com/shipment-view/sales/v2/orders?limit=15`;
    return this.callService('get', null, path);
  }
  public callService(
    methodType: string,
    body: any = null,
    path: string
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDgwNjYxNTEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiI0OTViODcyOC1jNzYxLTRmYTctODNmZS1kYjc1YTdkNjMyMjEiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.TkfZC-TasdUlzKW8tSsqlY-yMm3U1A34kg2YaQ3DLxk',
    });

    if (methodType === 'get') return this.http$.get(path, { headers: headers });
    if (methodType === 'post')
      return this.http$.post(path, body, { headers: headers });
    if (methodType === 'put')
      return this.http$.put(path, body, { headers: headers });
    if (methodType === 'delete')
      return this.http$.delete(path, { headers: headers });
    return of([]);
  }
}
