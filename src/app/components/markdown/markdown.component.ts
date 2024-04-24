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
     this.fileService.getFileContent('https://gist.githubusercontent.com/pream-totaram/a3f17f7d08549f45297aad90315d3a32/raw/78ff4b3c94b1f1bf95ba87474b5c86d6cc55cc11/angular.md').subscribe(content => {
       this.markup = Marked.parse(content);
     });
  }
}

/**
 *

   export class FileComponent implements OnInit {
     fileContent: string;

     constructor(private fileService: FileService) {}

     }
   }
  */
