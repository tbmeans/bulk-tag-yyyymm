import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-note',
  template: `
    <p>
      {{ note }}
    </p>
  `,
  styles: [`
    p {
      font-style: italic;
    }
  `]
})
export class AuthNoteComponent {
  note: string = '';
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.note = this.route.snapshot.data['note'];
  }
}
