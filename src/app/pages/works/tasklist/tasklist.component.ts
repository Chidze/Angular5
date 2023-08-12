import { Component,Input, Output, EventEmitter } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  public i !: number;
  public length !: number;
  public task !: string;
  public count!: number;
  public arr: Array<string> = [];
  public done: Array<boolean> = [];
  public check: Array<boolean> = [];
  public show: boolean = false;
  public checkStyle = {
    position: 'absolute',
    zIndex: '-1',
    opacity: '0'
  }
  public editStyle = {
    height: '30px',
    width: '45px',
    fontFamily: 'sans-serif',
    backgroundColor: 'rgb(243, 194, 17)',
    border: 'none',
    borderRadius: '2px'
  }
  public deleteStyle = {
    height: '30px',
    width: '55px',
    fontFamily: 'sans-serif',
    backgroundColor: 'rgb(243, 66, 66)',
    color: 'white',
    border: 'none',
    borderRadius: '2px'
  }
  constructor() { }

  process(ind: number): void {
    this.i = ind;
    if (this.check[ind]) {
      this.done[ind] = true;
    }
    else {
      this.done[ind] = false;
    }

  }
  getCount() {
    this.length = this.arr.length;
  }

  deleteTask(ind: number): void {
    let a = this.arr.splice(ind, 1);
    let b = this.done.splice(ind, 1);
    let c = this.check.splice(ind, 1);
    this.getCount();
  }

  editTask(ind: number): void {
    this.i = ind;
    this.show = true;
    this.task = this.arr[ind];
  }
  checkName(name:string): void {
    let b = this.arr.push(name);
    let n = this.done.push(false);
    let t = this.check.push(false);
    this.getCount();
  }

  saveEdit(): void {
    this.arr[this.i] = this.task;
    this.task = '';
    this.show = false;
  }
}
