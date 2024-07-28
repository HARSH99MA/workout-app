import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

export const routes: Routes = [
  { path: 'workouts', component: WorkoutListComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: '', redirectTo: '/workouts', pathMatch: 'full' },
  { path: '**', redirectTo: '/workouts' }
];
