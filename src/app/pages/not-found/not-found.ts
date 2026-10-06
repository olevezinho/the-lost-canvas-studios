import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <main class="not-found">
      <p class="code" aria-hidden="true">404</p>
      <h1>This thread leads nowhere.</h1>
      <a routerLink="/" class="back">Back to the canvas</a>
    </main>
  `,
  styleUrl: './not-found.scss',
})
export class NotFound {
  constructor() {
    inject(Title).setTitle('Page not found — The Lost Canvas Studios');
    inject(Meta).updateTag({ name: 'robots', content: 'noindex' }); // SEO: nunca indexar
  }
}
