import { Component, OnInit } from '@angular/core';
import { NG_BOOTSTRAP_SAMPLE_FORM_MODEL } from "./sample-form-model";
import { NG_BOOTSTRAP_SAMPLE_FORM_LAYOUT } from "./sample-form-layout";
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from "@ng-dynamic-forms/core";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formModel: DynamicFormControlModel[] = NG_BOOTSTRAP_SAMPLE_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = NG_BOOTSTRAP_SAMPLE_FORM_LAYOUT;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onBlur($event) {
      console.log(`NG Bootstrap blur event on: ${$event.model.id}: `, $event);
  }

  onChange($event) {
      console.log(`NG Bootstrap change event on: ${$event.model.id}: `, $event);
  }

  onFocus($event) {
      console.log(`NG Bootstrap focus event on: ${$event.model.id}: `, $event);
  }

  onNgbEvent($event) {
      console.log(`NG Bootstrap ${$event.type} event on: ${$event.model.id}: `, $event);
  }
}