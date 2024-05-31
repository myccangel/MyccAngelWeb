import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonList, IonRadio, IonCardContent, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonLabel, IonListHeader, IonRadioGroup, IonCardContent, IonRadio, IonList, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
