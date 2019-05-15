import {Component, OnInit} from '@angular/core';
import {Wcate} from '../model/wcate';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CwiseService} from '../services/cwise.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wcate',
  templateUrl: './wcate.component.html',
  styleUrls: ['./wcate.component.css']
})
export class WcateComponent implements OnInit {

  /*category: Wcate;
  editCategoryForm: FormGroup;*/

  // formData: Wcate;

  constructor(private router: Router, private formBuilder: FormBuilder, private cWise: CwiseService) {
  }


  ngOnInit() {

    this.resetForm();
    /*this.editCategoryForm = this.formBuilder.group({
      id: [''],
      wcate: ['', Validators.required]
    });*/
    /* const categoryId = window.localStorage.getItem('editCategory');
     if (!categoryId) {
       this.router.navigate(['']);
       return;
     }*/

  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.cWise.wCateformData = {
      wcateId: null,
      wcate: ''
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.cWise.insertWCate(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }
}
