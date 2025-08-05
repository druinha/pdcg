import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionsComponent } from './subventions.component';

describe('SubventionsComponent', () => {
  let component: SubventionsComponent;
  let fixture: ComponentFixture<SubventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
