import {Component, OnInit} from '@angular/core';
import {CwiseService} from '../services/cwise.service';
import {NgForm} from '@angular/forms';
import {FwiseService} from '../services/fwise.service';

@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {
  categorys: any = [];

  constructor(private cWise: CwiseService, private addfService: FwiseService) {

  }

  ngOnInit() {
    this.resetFForm();
    this.loadWcate();
  }

  resetFForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.addfService.add_fformData = {
      fformid: 0,
      wcate: {
        wcateId: null,
        wcate: null
      },
      jid: null,
      f_id: '',
      description: '',
      eng: '',
      no_of_commits: 1,
      pull_links: ''
    };
  }

  loadWcate() {
    this.cWise.getwcate().subscribe(e => {
      console.log(e);
      this.categorys = e;
    });
  }

  onSubmitFForm(form: NgForm) {
    this.insertFForm(form);
  }

  private insertFForm(form: NgForm) {
    console.log(form.value);
    this.addfService.insertFForm(form.value).subscribe(e => {
      this.resetFForm(form);
    });
  }

}
