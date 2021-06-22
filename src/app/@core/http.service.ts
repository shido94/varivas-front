import { NotificationService } from './notification.service';
import { ConstantService } from './constant.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
    private apiUrl = '';
    private loading: any;

    constructor(private http: HttpClient,
                private constantService: ConstantService,
                private notificationService: NotificationService) {
        this.apiUrl = this.constantService.server_url;
    }

    get(url: string, params?: any): Observable<any> {
        this.showLoader();
        return this.http.get(this.getFullUrl(url), params)
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    post(url: string, params: any): Observable<any> {
        this.showLoader();
        return this.http.post(this.getFullUrl(url), params)
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    put(url: string, params: any): Observable<any> {
        this.showLoader();
        return this.http.put(this.getFullUrl(url), params)
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }

    delete(url: string, params?: any): Observable<any> {
        this.showLoader();
        return this.http.delete(this.getFullUrl(url), params)
        .pipe( finalize(() => {
            this.hideLoader();
        }));
    }


    private getFullUrl(uri: string): string {
        return this.apiUrl + uri;
    }

    // tslint:disable-next-line:typedef
    private async showLoader() {
    }

    // tslint:disable-next-line:typedef
    private hideLoader() {
    }


}
