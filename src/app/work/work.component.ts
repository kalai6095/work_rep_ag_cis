import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  editWorkForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
