import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { addIcons } from 'ionicons';
import { hourglassOutline, add, checkmarkCircleOutline, syncOutline, archiveOutline, trophyOutline, mailOutline, searchOutline } from 'ionicons/icons';

addIcons({
  'hourglass-outline': hourglassOutline,
  'add': add,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'sync-outline': syncOutline,
  'archive-outline': archiveOutline,
  'trophy-outline': trophyOutline,
  'mail-outline': mailOutline, // Adicione o ícone de mail
  'search-outline': searchOutline // Adicione o ícone de pesquisa
});

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});
