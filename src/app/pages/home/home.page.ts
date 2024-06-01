import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonAvatar,
  IonLabel,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonDatetime
} from '@ionic/angular/standalone';
import { RecordsCardComponent } from 'src/app/components/records-card/records-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonItem,
    IonLabel,
    IonAvatar,
    IonList,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonDatetime,
    CommonModule,
    FormsModule,
    RecordsCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePage implements OnInit {
  events: { title: string; date: string }[] = [];
  hasFooter: boolean = true; // Adicione esta linha

  constructor() { }

  ngOnInit() {
    // Initial load of events, replace with your logic
    this.events = [
      { title: 'Event 1', date: '2024-06-01' },
      { title: 'Event 2', date: '2024-06-05' }
    ];
  }

  onDateChange(event: any) {
    const selectedDate = event.detail.value;
    console.log('Selected date: ', selectedDate);
    // Fetch and display events for the selected date
    // Replace with your logic to fetch events
    this.events = this.getEventsForDate(selectedDate);
  }

  getEventsForDate(date: string): { title: string; date: string }[] {
    // Replace with your actual event fetching logic
    return [
      { title: `Event on ${date}`, date }
    ];
  }
}
