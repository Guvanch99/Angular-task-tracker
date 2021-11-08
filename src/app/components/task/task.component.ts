import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from '../../Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks:Task[]=[]

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>this.tasks=tasks)
  }

}
