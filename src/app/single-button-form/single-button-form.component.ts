import { Component, inject } from '@angular/core';
import { OneButtonFormText } from '../one-button-form-text';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-button-form',
  template: `
    <form>
      <label for="{{ buttonText.id }}">
        {{ buttonText.labeling }}
      </label>
      <button type="button" id="{{ buttonText.id }}">
        {{ buttonText.on }}
      </button>
    </form>
  `,
  styleUrls: ['./single-button-form.component.css']
})
export class SingleButtonFormComponent {
  buttonText: OneButtonFormText = {
    labeling: 'button label here',
    id: 'button ID',
    on: 'words on button'
  };

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.buttonText = this.route.snapshot.data['buttonText'];
  }
}
