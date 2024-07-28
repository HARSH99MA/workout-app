import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.less']
})
export class WorkoutListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'workouts', 'totalMinutes'];
  dataSource = new MatTableDataSource<any>([]);
  search: string = '';
  filter: string = 'All';
  isLoading: boolean = false;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchWorkouts();
  }

  async fetchWorkouts() {
    this.isLoading = true;
    try {
      const res = await this.http.get<any[]>('http://localhost:5000/workouts').toPromise();
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (error) {
      console.error('Error fetching workouts:', error);
      this.error = 'Failed to load workouts. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  }

  get filteredWorkouts() {
    const filteredData = this.dataSource.data
      .filter(w => w.name.toLowerCase().includes(this.search.toLowerCase()))
      .filter(w => this.filter === 'All' || w.workouts.includes(this.filter));
      
    return filteredData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.search = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.search;
  }

  handlePage(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
}
