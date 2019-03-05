import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeNewComponent } from './edite-new.component';

describe('EditeNewComponent', () => {
  let component: EditeNewComponent;
  let fixture: ComponentFixture<EditeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
