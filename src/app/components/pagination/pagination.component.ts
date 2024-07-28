<!-- src/app/components/pagination/pagination.component.html -->

<nav *ngIf="totalPages > 1">
  <ul class="pagination">
    <li 
      class="page-item" 
      [class.disabled]="currentPage === 1" 
      (click)="setPage(currentPage - 1)">
      <a class="page-link" href="javascript:void(0)">Previous</a>
    </li>

    <li 
      class="page-item" 
      *ngFor="let page of pages()" 
      [class.active]="page === currentPage" 
      (click)="setPage(page)">
      <a class="page-link" href="javascript:void(0)">{{ page }}</a>
    </li>

    <li 
      class="page-item" 
      [class.disabled]="currentPage === totalPages" 
      (click)="setPage(currentPage + 1)">
      <a class="page-link" href="javascript:void(0)">Next</a>
    </li>
  </ul>
</nav>
