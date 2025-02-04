import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: string[] = [];
  newTask: string = "";

  constructor() { }
 
  ngOnInit() {
  }

  async addNewTask(task: string) {
    if (this.newTask != "") {
      await this.taskList.push(task);
    }
    this.newTask = "";
  }

  async taskDone(index: number) {
    await this.taskList.splice(index,1)
  }
}
