import { Component, input } from '@angular/core';
import { DsoAlert } from '@dso-toolkit/angular';

@Component({
  selector: 'app-failing-build',
  imports: [
    DsoAlert
  ],
  templateUrl: './failing-build.html',
  styleUrl: './failing-build.scss',
})
export class FailingBuild {

  public readonly naam= input.required<string>();

  public readonly roleAlert= input.required<boolean>();
}
