import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-card',
  template: `
      <div class="donut-card">
        <img 
        src="/assets/img/{{donut.icon}}.svg" 
        [alt]="donut.name"
        class="donut-card-icon">
        <div>
          <p class="donut-card-name">
            {{donut.name}}
          </p>
          <p class="donut-card-price">
            {{donut.price | currency}}
          </p>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class DonutCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
