import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFromUploadComponent } from './start-from-upload.component';

describe('StartFromUploadComponent', () => {
  let component: StartFromUploadComponent;
  let fixture: ComponentFixture<StartFromUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFromUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartFromUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
