import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule
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

  protected readonly Object = Object;
}
