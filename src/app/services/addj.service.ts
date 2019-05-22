import {Injectable} from '@angular/core';
import {Jform} from '../model/jform';

@Injectable({
  providedIn: 'root'
})
export class AddjService {
  add_jformData: Jform;

  constructor() {
  }
}
