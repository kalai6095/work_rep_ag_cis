import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = 'https://localhost:4300/';

  constructor() {
  }

}
