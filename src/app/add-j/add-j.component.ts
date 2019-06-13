import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {AddjService} from '../services/addj.service';
import {Router} from '@angular/router';
import {CwiseService} from '../services/cwise.service';

@Component({
  selector: 'app-add-j',
  templateUrl: './add-j.component.html',
  styleUrls: ['./add-j.component.css']
})
export class AddJComponent implements OnInit {
  categorys: any = [];

  constructor(private addjService: AddjService, private router: Router, private formBuilder: FormBuilder, private cWise: CwiseService) {
  }

  ngOnInit() {
    this.resetJForm();
    this.loadWcate();
  }

  loadWcate() {
    this.cWise.getwcate().subscribe(e => {
      console.log(e);
      this.categorys = e;
    });
  }

  resetJForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.addjService.add_jformData = {
      jformid: 0,
      wcate: {
        wcateId: null,
        wcate: null
      },
      jid: null,
      c_id: '',
      description: '',
      eng: '',
      no_of_commits: 1,
      pull_link: ''
    };
  }

  onSubmitJForm(form: NgForm) {
    this.insertJForm(form);
  }

  private insertJForm(form: NgForm) {
    console.log(form.value);
    this.addjService.insertJForm(form.value).subscribe(e => {
      this.resetJForm(form);
    });
  }
}
