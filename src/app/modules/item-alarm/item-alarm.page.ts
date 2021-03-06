import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { config } from '../../core/config/config';
import { ApiMapboxService } from 'src/app/core/http/api-mapbox.service';

@Component({
  selector: 'app-item-alarm',
  templateUrl: './item-alarm.page.html',
  styleUrls: ['./item-alarm.page.scss'],
})
export class ItemAlarmPage implements OnInit {
  public alarms = [
    {
      name: 'Alarm1',
      location: '',
      days: {
        mon: true,
        tue: true,
        wen: true,
        fri: true,
        sat: true,
        sun: true
      },
      status: true
    },
    {
      name: 'Alarm2',
      location: '',
      days: {
        mon: true,
        tue: true,
        wen: true,
        fri: true,
        sat: true,
        sun: true
      },
      status: true
    },
    {
      name: 'Alarm3',
      location: '',
      days: {
        mon: true,
        tue: true,
        wen: true,
        fri: true,
        sat: true,
        sun: true
      },
      status: true
    },
    {
      name: 'Alarm4',
      location: '',
      days: {
        mon: true,
        tue: true,
        wen: true,
        fri: true,
        sat: true,
        sun: true
      },
      status: true
    }
  ];

  constructor(private router: Router, private apiMapbox: ApiMapboxService) { }

  ngOnInit() {
  }

  editItemAlarm() {
    this.router.navigateByUrl('/add-alarm');
  }

  changeAlarmStatus() {

  }

  deleteAlarm() { }

}
