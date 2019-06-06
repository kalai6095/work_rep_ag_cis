import {Injectable} from '@angular/core';
import {Fform} from '../model/fform';
import {Cform} from '../model/cform';
import {ConfigService} from '../config.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FwiseService {
  add_fformData: Fform;
  base: string;

  constructor(private configService: ConfigService, private http: HttpClient) {
    this.base = this.configService.baseUrl;
  }

  insertFForm(add_fformData: Cform) {
    return this.http.post(this.base + 'insert/addf', add_fformData);
  }
}
