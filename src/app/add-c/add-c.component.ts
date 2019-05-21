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

  constructor(private router: Router, private formBuilder: FormBuilder, private cWise: CwiseService) {
  }

  ngOnInit() {
    this.resetCForm();
  }

  resetCForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.cWise.add_cformData = {
      category: 'C',
      Id: '',
      description: '',
      eng: '',
      no_of_commits: 1,
      is_converted: ''
    }
    ;
  }

  onSubmitCForm(form: NgForm) {

  }

}
