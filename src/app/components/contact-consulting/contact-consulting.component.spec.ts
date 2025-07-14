import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactConsultingComponent } from './contact-consulting.component';

describe('ContactConsultingComponent', () => {
  let component: ContactConsultingComponent;
  let fixture: ComponentFixture<ContactConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
