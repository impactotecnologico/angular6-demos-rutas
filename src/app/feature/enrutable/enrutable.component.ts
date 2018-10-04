import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrutable',
  templateUrl: './enrutable.component.html',
  styleUrls: ['./enrutable.component.css']
})
export class EnrutableComponent implements OnInit {

  public id: string;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
   }

  ngOnInit() {

  }

}
