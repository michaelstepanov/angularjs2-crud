import { Injectable, Injector } from '@angular/core';
import { PlaceHolderService } from '../../shared/place-holder.service';

@Injectable()
/**
 * Service to manage posts
 */
export class PostService extends PlaceHolderService {
  constructor(injector: Injector) {
    super(injector);
    this.url = this.url + '/posts';
  }
}
