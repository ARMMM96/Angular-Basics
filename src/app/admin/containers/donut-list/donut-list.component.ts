import { Component, OnInit } from '@angular/core';


import { Donut } from '../../models/donut.model';


@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card 
          *ngFor="let donut of donuts"
        [donut]="donut"
        ></app-donut-card>
      
        <div *ngFor="
                      let donut of donuts; 
                      trackById: trackById; 
                      index as i ; 
                      odd as o; 
                      even as e "
                      [style.color]="e ? 'red' : 'blue'"
              > 
              {{ i + 1 }}
              {{ o }}
              {{ e }}
        </div>
      
      
      </ng-container> 


      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {

  donuts!: any[];

  constructor() { }

  ngOnInit(): void {
    this.donuts = [{
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 199,
      description: 'For the pure chocoholic.'
    },
    {
      id: '3u98kl',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: true,
      description: 'Sticky perfection.'
    },
    {
      id: 'ae098s',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.'
    }

    ];


  }

}
