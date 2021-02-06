import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPageComponent } from './students-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('StudentsPageComponent', () => {
  let component: StudentsPageComponent;
  let fixture: ComponentFixture<StudentsPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ StudentsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
