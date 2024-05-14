import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('FileService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
