import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
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
  IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-records-card',
  templateUrl: './records-card.component.html',
  styleUrls: ['./records-card.component.scss'],
  standalone: true,
  imports: [IonCard,
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
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA

  ]
})
export class RecordsCardComponent  implements OnInit {

@Input() hasFooter: boolean | undefined;
@Input() hasHeader: boolean | undefined;

@Input() status: string | undefined;
@Input() updateAt: string | undefined;
@Input() createAt: string | undefined;
@Input() notes: string | undefined;

  constructor() { }

  ngOnInit() {}

}
