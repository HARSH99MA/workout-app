
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatTableModule, MatPaginatorModule } from '@angular/material/table';
import { WorkoutListComponent } from './workout-list.component';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule
      ],
      declarations: [WorkoutListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch workouts on init', () => {
    const workoutData = [
      { name: 'Workout 1', workouts: ['Cardio'], totalMinutes: 30 },
      { name: 'Workout 2', workouts: ['Strength'], totalMinutes: 45 }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('http://localhost:5000/workouts');
    expect(req.request.method).toBe('GET');
    req.flush(workoutData);

    fixture.detectChanges();

    expect(component.dataSource.data).toEqual(workoutData);
  });
});
