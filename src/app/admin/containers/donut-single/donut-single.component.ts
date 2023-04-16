import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      ></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    const id = 'U2dqRyS';
    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => (this.donut = donut));
  }
  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe(() => console.log('Created successfuly!'));
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: () => console.log('Updated successfuly!'),
      error: (err) => console.log('On Update Error:', err),
    });
  }
  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => console.log('Deleted successfully !'));
  }
}
