import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        <!-- {{donut | json}} -->
        {{donut.name}}
        {{donut.price | currency}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: any;
  donuts!: any[];

  constructor() { }

  ngOnInit(): void {
    this.donuts = [
      {
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

    this.donut = this.donuts[0];
  }

}
