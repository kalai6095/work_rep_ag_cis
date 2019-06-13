import {Injectable} from '@angular/core';
import {Jform} from '../model/jform';
import {Cform} from '../model/cform';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class AddjService {
  add_jformData: Jform;
  base: string;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.base = this.configService.baseUrl;
  }

  insertJForm(add_jformData: Cform) {
    return this.http.post(this.base + 'insert/addj', add_jformData);
  }

  getJForm() {
    return this.http.get(this.base + 'page/getj');
  }

}
