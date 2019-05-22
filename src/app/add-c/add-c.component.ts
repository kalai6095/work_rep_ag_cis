import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CwiseService} from '../services/cwise.service';

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {

  categorys: any = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private cWise: CwiseService) {
  }

  ngOnInit() {
    this.resetCForm();
    this.loadWcate();
  }

  loadWcate() {
    this.cWise.getwcate().subscribe(e => {
      console.log(e);
      this.categorys = e;
    });
  }

  resetCForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.cWise.add_cformData = {
      cformid: 0,
      wcate: {
        wcateId: null,
        wcate: null
      },
      cid: '',
      description: '',
      eng: '',
      no_of_commits: 1,
      pull_link: ''
    };


  }

  onSubmitCForm(form: NgForm) {
    this.insertCForm(form);
  }


  private insertCForm(form: NgForm) {
    console.log(form.value);
    this.cWise.insertCForm(form.value).subscribe(e => {
      //this.resetCForm(form);
    });
  }
}
