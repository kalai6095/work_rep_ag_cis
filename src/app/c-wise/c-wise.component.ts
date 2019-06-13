import {Component, OnInit} from '@angular/core';
import {CwiseService} from '../services/cwise.service';

@Component({
  selector: 'app-c-wise',
  templateUrl: './c-wise.component.html',
  styleUrls: ['./c-wise.component.css']
})
export class CWiseComponent implements OnInit {

  cdets: any = [];

  constructor(private cwise: CwiseService) {
  }

  ngOnInit() {
    this.loadcdets();
  }

  loadcdets() {
    this.cwise.getCForm().subscribe(e => {
        console.log(e);
        this.cdets = e;
      }
    );
  }

}
