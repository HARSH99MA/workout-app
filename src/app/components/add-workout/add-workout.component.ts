import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.less']
})
export class AddWorkoutComponent {
  workoutForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      workouts: ['', Validators.required],
      totalMinutes: [0, [Validators.required, Validators.min(1)]]
    });
  }

  async addWorkout() {
    if (this.workoutForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    const workoutData = this.workoutForm.value;
    workoutData.workouts = workoutData.workouts.split(',').map((w: string) => w.trim());

    try {
      await this.http.post('http://localhost:5000/workouts', workoutData).toPromise();
      this.successMessage = 'Workout added successfully!';
      this.errorMessage = '';
      this.workoutForm.reset();
    } catch (error) {
      this.errorMessage = 'Failed to add workout. Please try again.';
      console.error('Error adding workout:', error);
    }
  }
}
