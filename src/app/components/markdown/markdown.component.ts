import { Component } from '@angular/core';
import { Marked } from '@ts-stack/markdown';
import { SanitizedHtmlPipe } from '../../sanitized-html.pipe';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [SanitizedHtmlPipe],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})

export class MarkdownComponent {
  markup: string;
  constructor() {
    this.markup = Marked.parse("## How are you?");
  }
}
