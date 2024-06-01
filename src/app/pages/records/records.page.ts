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
  IonMenuButton
} from '@ionic/angular/standalone';
  import { RecordsCardComponent } from 'src/app/components/records-card/records-card.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
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
    CommonModule,
    FormsModule,
    RecordsCardComponent
  ],  schemas: [
    CUSTOM_ELEMENTS_SCHEMA

  ]
})
export class RecordsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
