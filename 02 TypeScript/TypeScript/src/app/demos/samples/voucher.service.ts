
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VouchersService {
    constructor(private http: HttpClient) { }

    getVouchers() : Promise<any> {
        return this.http.get('/assets/vouchers.json').toPromise();          
    }    
}