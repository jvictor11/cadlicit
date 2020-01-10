import { BiddingService } from '../bidding.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bidding } from '../bidding';

@Component({
  selector: 'app-biddings',
  templateUrl: './biddings.component.html',
  styleUrls: ['./biddings.component.scss']
})
export class BiddingsComponent implements OnInit {

  biddings$: Observable<Bidding[]>;

  constructor(private biddingService: BiddingService) { }

  ngOnInit() {
    this.biddings$ = this.biddingService.getBidding();
  }

}
