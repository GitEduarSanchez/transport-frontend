import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'conductor',
    loadChildren: () =>
      import('./components/conductor/conductor.routes').then(
        (x) => x.CONDUCTOR_ROUTES
      ),
  },
  {
    path: 'descargue',
    loadChildren: () =>
      import('./components/descargue/descargue.routes').then(
        (x) => x.DESCARGUE_ROUTES
      ),
  },
];
