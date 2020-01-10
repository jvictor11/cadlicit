import { States } from './../states';
import { Observable } from 'rxjs';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  states$: Observable<States[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    console.log(this.mainService.getStates());
    this.states$ = this.mainService.getStates();
  }

}
