import { TestBed } from '@angular/core/testing';
import { DeveloperComponent } from './developer.component';
import { attributes, componentList } from '@syncfusion/ej2-base';
import { emit } from 'process';
import { ArrowFunctionExpr } from '@angular/compiler';
import { sequenceEqual } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
DeveloperComponent     ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DeveloperComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calendar'`, () => {
    const fixture = TestBed.createComponent(DeveloperComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calendar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DeveloperComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('calendar app is running!');
  });
});

