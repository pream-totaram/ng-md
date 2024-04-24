import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SanitizedHtmlPipe } from './sanitized-html.pipe';
import { FileService } from './file.service';
import { provideHttpClient } from '@angular/common/http';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    SanitizedHtmlPipe,
    FileService,
    provideHttpClient()
  ]
};
