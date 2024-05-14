import { SecurityContext } from '@angular/core';
import {SanitizedHtmlPipe} from './sanitized-html.pipe';
import {TestBed} from "@angular/core/testing";
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue
} from "@angular/platform-browser";

class MockDomSanitizer extends DomSanitizer {
    override sanitize(context: SecurityContext, value: string | SafeValue | null): string | null {
      return '';
    }
    override bypassSecurityTrustHtml(value: string): SafeHtml {
      return '';
    }
    override bypassSecurityTrustStyle(value: string): SafeStyle {
      return '';
    }
    override bypassSecurityTrustScript(value: string): SafeScript {
      return '';
    }
    override bypassSecurityTrustUrl(value: string): SafeUrl {
      return '';
    }
    override bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {
      return '';
    }

}


describe('SanitizedHtmlPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: MockDomSanitizer
        }
      ]
    });
  });

  it('create an instance', () => {
    const pipe = new SanitizedHtmlPipe(new MockDomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
