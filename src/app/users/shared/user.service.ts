import { Injectable, Injector } from '@angular/core';
import { PlaceHolderService } from '../../shared/place-holder.service';

@Injectable()
/**
 * Service to manage users
 */
export class UserService extends PlaceHolderService {
  constructor(injector: Injector) {
    super(injector);
    this.url = this.url + '/users';
  }
}
