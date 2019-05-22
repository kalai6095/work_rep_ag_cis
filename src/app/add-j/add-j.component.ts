import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {AddjService} from '../services/addj.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-j',
  templateUrl: './add-j.component.html',
  styleUrls: ['./add-j.component.css']
})
export class AddJComponent implements OnInit {

  constructor(private addjService: AddjService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.addjService.add_jformData = {
      cformid: 0,
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

}
