import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWebappComponent } from './contact-webapp.component';

describe('ContactWebappComponent', () => {
  let component: ContactWebappComponent;
  let fixture: ComponentFixture<ContactWebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWebappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
