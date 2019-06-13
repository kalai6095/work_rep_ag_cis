import {Component, OnInit} from '@angular/core';
import {AddjService} from '../services/addj.service';

@Component({
  selector: 'app-j-wise',
  templateUrl: './j-wise.component.html',
  styleUrls: ['./j-wise.component.css']
})
export class JWiseComponent implements OnInit {

  jiras: any = [];

  constructor(private jservice: AddjService) {
  }

  ngOnInit() {
    this.loadJiras();
  }

  loadJiras() {
    this.jservice.getJForm().subscribe(e => {
      console.log(e);
      this.jiras = e;
    });
  }
}
