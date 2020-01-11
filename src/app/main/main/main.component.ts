import { Observable } from 'rxjs';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  states$: Observable<any>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.states$ = this.mainService.getStates();
  }

}
