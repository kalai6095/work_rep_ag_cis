import {Injectable} from '@angular/core';
import {ConfigService} from '../config.service';
import {HttpClient} from '@angular/common/http';
import {Wcate} from '../model/wcate';
import {Cform} from '../model/cform';

@Injectable({
  providedIn: 'root'
})
export class CwiseService {

  base: string;
  wCateformData: Wcate;
  add_cformData: Cform;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.base = this.configService.baseUrl;
  }


  insertWCate(wcateformData: Wcate) {
    return this.http.post(this.base + 'insert/wcate', wcateformData);
  }

  getwcate() {
    return this.http.get(this.base + 'report/wcate');
  }
}
