import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DsoToolkitModule
} from '@dso-toolkit/angular';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    DsoToolkitModule,
  ],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export class TemplateDrivenForm {
  formData = {
    name: '',
    gender: '',
    acceptTerms: false
  };

  onSubmit(form: any) {
    console.log(form.value);
  }

  handleChange(e: CustomEvent){
    console.log(e.detail.checked);
    this.formData.acceptTerms = e.detail.checked;
  };
}
