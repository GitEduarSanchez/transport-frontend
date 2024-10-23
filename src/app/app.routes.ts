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
    path: 'viajeorigen',
    loadChildren: () =>
      import('./components/viaje-origen/viaje-origen.routes').then(
        (x) => x.VIAJEORIGEN_ROUTES
      ),
  },
];
