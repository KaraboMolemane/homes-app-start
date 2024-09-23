import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/public/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'homes';
}
