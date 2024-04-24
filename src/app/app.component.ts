import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent } from './components/markdown/markdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'slideshow';
}
