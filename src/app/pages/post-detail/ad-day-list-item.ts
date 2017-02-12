import { Component, Input } from '@angular/core';

import { AdDay } from '../../Types/ad-day';

@Component({
  selector: "ad-day-list-item",
  templateUrl: "./views/ad-day-list-item.html",
  styleUrls: [ "./styles/ad-day-list-item.css" ]
})
export class AdDayListItem {
  @Input() 
  adDay: AdDay;
}