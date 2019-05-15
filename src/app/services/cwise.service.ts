import {Injectable} from '@angular/core';
import {ConfigService} from '../config.service';
import {HttpClient} from '@angular/common/http';
import {Wcate} from '../model/wcate';

@Injectable({
  providedIn: 'root'
})
export class CwiseService {

  base: string;
  wCateformData: Wcate;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.base = this.configService.baseUrl;
  }


  insertWCate(wcateformData: Wcate) {
    return this.http.post(this.base + 'insert/wcate', wcateformData);
  }
}
