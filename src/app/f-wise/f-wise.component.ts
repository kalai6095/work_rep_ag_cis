import {Component, OnInit} from '@angular/core';
import {FwiseService} from '../services/fwise.service';

@Component({
  selector: 'app-f-wise',
  templateUrl: './f-wise.component.html',
  styleUrls: ['./f-wise.component.css']
})
export class FWiseComponent implements OnInit {
  features: any = [];

  constructor(private fservice: FwiseService) {
  }

  ngOnInit() {
    this.loadfeatures();
  }

  loadfeatures() {
    this.fservice.getFForm().subscribe(e => {
      console.log(e);
      this.features = e;
    });
  }

}
