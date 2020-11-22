import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})

export class FechaComponent implements OnInit {

  fecha:any;
  
  constructor() { 
    this.fecha = new Date();
  }

  ngOnInit(): void {
  }

}
