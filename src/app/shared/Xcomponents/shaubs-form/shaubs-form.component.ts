import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'shaubs-form',
  templateUrl: './shaubs-form.component.html',
  styleUrls: ['./shaubs-form.component.scss']
})
export class ShaubsFormComponent implements OnInit {

  // @Input('form') formControlList = new FormArray([])
  // @Input('formLabelList') fromLabelList = [];
  @Input('form') customForm: FormGroup;
  @Input('formInputList') formInputList: Array<string>;
  @Input('errorMessages') errorMessages: Array<string>;
  @Input('typeList') typeList: Array<any>;
  @Input('submitLabel') submitLabel: string;

  @Output('formData') formData: any;


  constructor() { }

  ngOnInit(): void {
    this.customForm
    console.log("form:", this.customForm);
    console.log("labels", this.formInputList)
  }


  onSubmit() {
    console.log(this.customForm.value);
    this.formData = this.customForm.value;
  }

}
