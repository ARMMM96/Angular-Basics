import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <!-- {{message}} -->
    <!-- {{message === "Hello world!"}}  -->
    <!-- {{message === "Hello world"}} -->
    <!-- {{message.length}} -->
    <!-- {{message.length  > 12}} -->
    <!-- {{message.length ? message: 'Nothing here....'}} -->
    
    <h1 (click)="handleClick($event)">{{newMessage}}</h1>


    <input [value]="message" (input)="handleInput($event)">
  </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Hello world';
    console.log('Hello Angular!');
  }

  handleClick(event: Event) {
    console.log(event);
  }
  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;
  }
}
