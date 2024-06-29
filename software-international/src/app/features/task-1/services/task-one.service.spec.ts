import { TestBed } from '@angular/core/testing';

import { TaskOneService } from './task-one.service';

describe('TaskOneService', () => {
  let service: TaskOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
