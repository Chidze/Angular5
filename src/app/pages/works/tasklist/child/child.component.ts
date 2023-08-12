import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public name!:string;
  public length !: number;


  constructor(){}
@Output() addTask = new EventEmitter<string>();
@Input() count!:number;

ngOnInit(): void{}
addName(name:string): void{
this.addTask.emit(name);
    this.name = '';
  }
}
