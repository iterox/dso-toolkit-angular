import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TemplateDrivenForm} from './template-driven-form/template-driven-form';
import { FailingBuild } from './failing-build/failing-build';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDrivenForm, FailingBuild],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dso-toolkit-angular');
}
