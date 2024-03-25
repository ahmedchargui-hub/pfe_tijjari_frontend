import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavorgComponent } from './sidenavorg.component';

describe('SidenavorgComponent', () => {
  let component: SidenavorgComponent;
  let fixture: ComponentFixture<SidenavorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavorgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
