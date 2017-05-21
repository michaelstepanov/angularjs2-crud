import { Injector } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Base class for all PlaceHolder services
 */
export abstract class PlaceHolderService {
  protected http: Http;
  protected url: string = 'https://jsonplaceholder.typicode.com';

  constructor(injector: Injector) {
    this.http = injector.get(Http);
  }

  /**
   * Get resources
   *
   * @param params
   * @returns {Observable<R>}
   */
  all(params: any = {}) {
    let url = this.url;
    if (params) url += '?';
    if (params.page) url += `_page=${params.page}&`;
    if (params.limit) url += `_limit=${params.limit}&`;

    return this.http.get(url)
        .map(res => {
          return {
            total: res.headers.get('X-Total-Count'),
            data: res.json()
          };
        });
  }

  /**
   * Get a resource
   *
   * @param id
   * @returns {Observable<R>}
   */
  get(id: number) {
    let url = this.url + `/${id}`;

    return this.http.get(url)
        .map(res => res.json());
  }

  /**
   * Create a resource
   *
   * @param data
   * @returns {Observable<R>}
   */
  post(data: any) {
    let url = this.url;

    return this.http.post(url, data)
        .map(res => res.json());
  }

  /**
   * Delete a resource
   *
   * @param id
   * @returns {Observable<R>}
   */
  delete(id: number) {
    let url = this.url + '/'  +id;

    return this.http.delete(url)
        .map(res => res.json());
  }
}
