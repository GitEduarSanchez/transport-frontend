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
    path: 'estado',
    loadChildren: () =>
      import('./components/estado/estado.routes').then(
        (x) => x.ESTADO_ROUTES
      ),
  },
];
