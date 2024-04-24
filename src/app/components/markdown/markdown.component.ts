import { Component, OnInit } from '@angular/core';
import { Marked } from '@ts-stack/markdown';
import { SanitizedHtmlPipe } from '../../sanitized-html.pipe';
import { FileService } from '../../file.service';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [SanitizedHtmlPipe],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})

export class MarkdownComponent implements OnInit {
  markup: string = '';
  constructor(private fileService: FileService) {}

  ngOnInit(): void {
     this.fileService.getFileContent('https://gist.githubusercontent.com/pream-totaram/a3f17f7d08549f45297aad90315d3a32/raw/d1d480c7199437ee4d990df1d8a356aed517c355/angular.md').subscribe(content => {
       this.markup = Marked.parse(content);
     });
  }
}

