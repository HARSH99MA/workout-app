import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { EditWorkoutComponent } from './components/edit-workout/edit-workout.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutListComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'edit-workout/:id', component: EditWorkoutComponent },
  { path: 'workout-detail/:id', component: WorkoutDetailComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: '/workouts', pathMatch: 'full' },
  { path: '**', redirectTo: '/workouts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
