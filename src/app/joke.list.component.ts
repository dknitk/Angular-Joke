
import { Component } from '@angular/core';
import { Joke } from './Joke';
@Component({
  selector: 'joke-list',
  template: `
   <joke-form (jokeCreated)="addJoke($event)"></joke-form>
<joke *ngFor="let j of jokes" [joke]="j">
<span class="setup">{{ j.setup }}?</span>
<h1 class="punchline">{{ j.punchline }}</h1>
</joke>
    `
})

export class JokeListComponent {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-apony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];

  }
  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}