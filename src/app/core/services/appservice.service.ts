import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class Appservice {
  ApiUrl!: string;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.ApiUrl = environment.endpoint;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
  }
  getDataAction<T>(oUrl: string): Observable<T[]> {
    return this.http.get<T[]>(this.ApiUrl + oUrl);
  }
  public GetDataAction<T>(
    oUrlControl: string,
    oQuery: string
  ): Observable<T[]> {
    return this.http.get<T[]>(this.ApiUrl + oUrlControl + '/' + oQuery, {
      headers: this.headers,
    });
  }
  /**
   * @param oId : de tipo number
   * @param oUrl : de tipo string
   */

  getDataActionById(oId: number, oUrl: string): Observable<any> {
    return this.http.get(this.ApiUrl + oUrl + '/' + oId);
  }
  public NewControl<T>(oObject: T, oUrlControl: string): Observable<any> {
    return this.http.post<T>(this.ApiUrl + oUrlControl, oObject, {
      headers: this.headers,
    });
  }
  deleteActionById(oUrl: string, oId: number): Observable<any> {
    return this.http.delete(this.ApiUrl + oUrl + '/' + oId);
  }
  public UpdateControl<T>(
    oId: any,
    oObject: T,
    oUrlControl: string
  ): Observable<any> {
    return this.http.put<T>(
      this.ApiUrl + oUrlControl + '/' + oId.toString(),
      oObject
    );
  }
  getVideoUrl(fileName: string): string {
    return `${this.ApiUrl}/videos/${fileName}`;
  }
  getTablaConfiguration(): import('datatables.net').Config {
    return {
      pageLength: 10,
      pagingType: 'full_numbers',
      language: {
        url: 'assets/script/spanish.json',
      },
      paging: true,
    };
  }
}
