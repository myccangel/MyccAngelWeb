import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCardContent, IonCard, IonList, IonItem, IonLabel, IonButton, IonText, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonText, IonButton, IonLabel, IonItem, IonList, IonCard, IonCardContent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UpdatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
