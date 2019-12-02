import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Voucher } from '../model';

@Component({
  selector: 'app-http-clients',
  templateUrl: './http-clients.component.html',
  styleUrls: ['./http-clients.component.scss']
})
export class HttpClientsComponent implements OnInit {
  result: any;
  fname: string;
  reg =
    '{ provide: HTTP_INTERCEPTORS, useClass: NgDemoAppInterceptor,multi:true }';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getVouchers() {
    this.fname = 'getVouchers()';

    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}api/vouchers`)
      .subscribe(data => {
        this.result = data;
      });
  }

  observeResponse() {
    this.fname = 'observeResponse()';

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers`, {
        observe: 'response'
      })
      .subscribe((response: HttpResponse<any>) => {
        console.log('Response using {observe: "response"}: ', response);
        this.result = response;
        let data = response.body;
      });
  }

  usingHeadersHttpClient() {
    this.fname = 'usingHeadersHttpClient()';

    var h = new HttpHeaders({
      'Content-Type': 'application/json',
      UserEmail: 'alexander.pajer@integrations.at',
      SomeHeader: 'SomeVal'
    });

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers`, { headers: h })
      .subscribe(data => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }

  usingInterceptor() {
    this.fname = 'usingInterceptor()';

    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}api/vouchers`)
      .subscribe(data => {
        this.result = data;
      });
  }
}
