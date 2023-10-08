import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';
  enteredText = '';

  randomText = faker.lorem.words(5);
  onInput(value: string) {
	console.log(value)
	this.enteredText = value;
  }

}
