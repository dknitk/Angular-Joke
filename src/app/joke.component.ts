
import {Component , Input, SimpleChanges, OnChanges, OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck} from '@angular/core';
import { Joke } from './Joke';
@Component({
  selector: 'joke',
  template:  `
  <div class="card card-block">
    <h4 class="card-title">
      <ng-content select=".setup"></ng-content>

    </h4>
    <p class="card-text" [hidden]="data.hide">
      <ng-content select=".punchline"></ng-content>
    </p>
    <a class="btn btn-primary" (click)="data.toggle()">Tell Me </a>
  </div>
  `
})
// This code will work without imoplementing interfaces
export class JokeComponent implements OnChanges,
                                      OnInit,
                                      DoCheck,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy
                                    
{

  @Input('joke') data: Joke;

  // These Life Cycle method is to understand the Life Cycle of angular
  // Optional - Not Required. Hook Points
  constructor(){
    console.log('new - data is ${this.data}');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges - data is ${this.data}');
    for(let key in changes){
      console.log(`${key} changes
      current: ${changes[key].currentValue}
      previous: ${changes[key].previousValue}
      `);
    }

  }
  ngOnInit(){
    console.log('ngOnInit - data is ${this.data}');
  }
  ngDoCheck(){
    console.log('ngDoCheck - data is ${this.data}')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}

  