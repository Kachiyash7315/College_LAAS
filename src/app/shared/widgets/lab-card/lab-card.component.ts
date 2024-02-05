import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-card',
  templateUrl: './lab-card.component.html',
  styleUrls: ['./lab-card.component.css']
})
export class LabCardComponent implements OnInit {

  @Input() labImage?:string;
  @Input() labName?:string;
  @Input() labId?:string;
  @Input() academicYear?:number;

  constructor() { }

  ngOnInit(): void {
  }

}
