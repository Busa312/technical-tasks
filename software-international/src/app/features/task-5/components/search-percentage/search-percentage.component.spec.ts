import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPercentageComponent } from './search-percentage.component';

describe('SearchPercentageComponent', () => {
  let component: SearchPercentageComponent;
  let fixture: ComponentFixture<SearchPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPercentageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
